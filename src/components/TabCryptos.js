import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DeleteIcon from '@material-ui/icons/Delete'
import CancelIcon from '@material-ui/icons/Cancel';

export default function TabCryptos () {

    const cryptos = [
        {
            name:'BTC',
            cours:'58 251,11 $US',
            jour:'0.9%',
            semaine:'-0.9%',
            owned:'2',
        },
        {
            name:'DOGE',
            cours:'0,061378 $US',
            jour:'0.5%',
            semaine:'-0.3%',
            owned:'0',
        }
    ]

    return (
        <table className="TabCryptos">
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th>Cours</th>
                    <th>24 heures</th>
                    <th>7 jours</th>
                    <th>Possédées</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map((crypto) => (
                    <tr>
                        <td>{crypto.name}</td>
                        <td>{crypto.cours}</td>
                        <td>{crypto.jour}</td>
                        <td>{crypto.semaine}</td>
                        { crypto.owned === '0' ?
                            <td><CancelIcon fontSize="large" color="secondary"/></td>
                        :
                            <td>{crypto.owned}</td>
                        }
                        <td>
                            <IconButton color="primary" aria-label="shop">
                                <ShoppingCartIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="delete">
                                <DeleteIcon fontSize="large"/>
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}