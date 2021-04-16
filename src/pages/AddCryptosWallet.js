import React, { useEffect, useState } from 'react';
import '../css/wallet.css';
import Title from '../components/Title';
import TabAddCryptosWallet from '../components/tabs/TabAddCryptosWallet';
import CustomizedButton from '../components/Button';
import { Link } from 'react-router-dom';
import { 
    getNotFollowedCryptos,
    followCrypto
} from '../utils/followedCryptos'
import BasicTextField from '../components/fields/TextField'


const AddCryptosWallet = () => {
    
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
        await followCrypto(id);
    }
    
    return (
        <main className="Wallet AddCryptos">
            <section>
                <Link to={'/'} className="Link">
                    <CustomizedButton value="Retour" color="blue"/>
                </Link>
                <Title value="Ajouter une crypto" variant="1"/>
                <article>
                    <BasicTextField label='Rechercher...' className="SearchField" onChange={e => onUserSearch(e.target.value)} color="blue"/>
                    <TabAddCryptosWallet cryptosList={filteredCryptos.length ? filteredCryptos : cryptos} addCrypto={id => addCrypto(id)}/>
                </article>
            </section>
        </main>
    );
}

export default AddCryptosWallet;