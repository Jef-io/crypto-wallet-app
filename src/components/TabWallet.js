import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function TabWallet () {

    const cryptos = [
        {
            name:'BTC',
            montant: '2',
            cours:'58 251,11 $US',
            euros: '10 000'
        }
    ]

    return (
        <table className="TabCryptos">
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th>Montant des actifs</th>
                    <th>Cours</th>
                    <th>Valeur en euros des actifs</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map((crypto) => (
                    <tr>
                        <td>{crypto.name}</td>
                        <td>{crypto.montant}</td>
                        <td>{crypto.euros}</td>
                        <td>{crypto.cours}</td>
                        <td>
                            <IconButton color="secondary" aria-label="shop">
                                <AddCircleIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="primary" aria-label="shop">
                                <RemoveCircleIcon fontSize="large"/>
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}