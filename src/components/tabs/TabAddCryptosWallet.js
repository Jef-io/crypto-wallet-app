import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BasicTextField from '../fields/TextField'

export default function TabAddCryptosWallet ({
    cryptosList,
    addCrypto
}) {

    // const cryptos = cryptosList ? cryptosList : [];
    const cryptos = [{id:'btc'},{id:'doge'}];

    return (
        <table className="TabCryptos">
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th>Montant</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map((crypto, id) => (
                    <tr key={id}>
                        <td>{crypto.id}</td>
                        <td><BasicTextField type="number" defaultValue="1" required/></td>
                        <td>
                            <IconButton color="primary" aria-label="shop" onClick={() => addCrypto(crypto.id)}>
                                <AddCircleIcon fontSize="large"/>
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}