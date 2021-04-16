import React, { useEffect, useState } from 'react';
import '../css/cryptos.css';
import Title from '../components/Title';
import TabAddFollowedCryptos from '../components/tabs/TabAddFollowedCryptos';
import CustomizedButton from '../components/Button';
import { Link } from 'react-router-dom';
import { 
    getNotFollowedCryptos,
    addFollowedCrypto
} from '../utils/followedCryptos'
import BasicTextField from '../components/fields/TextField'


const AddFollowedCryptos = () => {
    
    const [cryptos, setCryptos] = useState([]);
    const [filteredCryptos, setFilteredCryptos] = useState([]);
    
    const fetchCryptos = async () => {
        const result = await getNotFollowedCryptos();
        setCryptos(result);
    }

    useEffect(() => {
        fetchCryptos();
    }, [])

    const onUserSearch = (value) => {
        const filteredCryptos = cryptos.filter(
            cryptos => cryptos.id.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
        setFilteredCryptos([...filteredCryptos]);
    }

    const addCrypto = async (id) => {
        await addFollowedCrypto(id);
    }
    
    return (
        <main className="Cryptos">
            <section>
                <Link to={'/cryptos'}>
                <CustomizedButton value="Retour" color="blue"/>
                </Link>
                <Title value="Suivre une crypto" variant="1"/>
                <article>
                    <BasicTextField label='Rechercher...' className="SearchField" onChange={e => onUserSearch(e.target.value)} color="blue"/>
                    <TabAddFollowedCryptos cryptosList={filteredCryptos.length ? filteredCryptos : cryptos} addCrypto={id => addCrypto(id)}/>
                </article>
            </section>
        </main>
    );
}

export default AddFollowedCryptos;