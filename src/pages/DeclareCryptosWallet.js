import React, { useEffect, useState } from 'react';
import '../css/wallet.css';
import Title from '../components/Title';
import TabDeclareCryptosWallet from '../components/tabs/TabDeclareCryptosWallet';
import CustomizedButton from '../components/Button';
import { Link } from 'react-router-dom';
import { getNotPossessedCryptos } from "../utils/wallet";
import BasicTextField from '../components/fields/TextField';
import { declareCryptoAmmount } from "../utils/wallet"


const DeclareCryptosWallet = () => {
    
    const [cryptos, setCryptos] = useState([]);
    const [filteredCryptos, setFilteredCryptos] = useState([]);
    
    const fetchCryptos = async () => {
        const result = await getNotPossessedCryptos();
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

    const declareCrypto = async (id, ammount, value) => {
        await declareCryptoAmmount(id, ammount, value);
        setCryptos(crypto =>  crypto.filter(crypto => crypto.id !== id));
        setFilteredCryptos(crypto => crypto.filter(crypto => crypto.id !== id))
    }
    
    return (
        <main className="Wallet AddCryptos">
            <section>
                <Link to={'/'} className="Link">
                    <CustomizedButton value="Retour" color="blue"/>
                </Link>
                <Title value="Déclarer une crypto" variant="1"/>
                <article>
                    <BasicTextField label='Rechercher...' className="SearchField" onChange={e => onUserSearch(e.target.value)} color="blue"/>
                    <TabDeclareCryptosWallet 
                        cryptosList={filteredCryptos.length ? filteredCryptos : cryptos} 
                        declare={(id, ammount, value) => declareCrypto(id, ammount, ammount*value)}
                    />
                </article>
            </section>
        </main>
    );
}

export default DeclareCryptosWallet;