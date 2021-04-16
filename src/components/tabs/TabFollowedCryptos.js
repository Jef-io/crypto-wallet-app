import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DeleteIcon from '@material-ui/icons/Delete'
import CancelIcon from '@material-ui/icons/Cancel';

export default function TabCryptos ({
    cryptosList,
    unfollowCrypto
}) {

    const cryptos = cryptosList ? cryptosList : [];

    return (
        <table className="TabCryptos">
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th>Cours</th>
                    <th>24 heures</th>
                    {/* a voir si quantité ou bool */}
                    <th>Possédée</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map((crypto) => (
                    <tr>
                        <td>{crypto.id}</td>
                        <td>{crypto.current_price} €</td>
                        <td>{crypto.market_cap_change_percentage_24h}</td>
                        <td><CancelIcon fontSize="large" color="secondary"/></td>
                        {/* { crypto.owned === '0' ?
                        :
                            <td>{crypto.owned}</td>
                        } */}
                        <td>
                            <IconButton color="primary" aria-label="shop">
                                <ShoppingCartIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="delete" onClick={() => unfollowCrypto(crypto.id)}>
                                <DeleteIcon fontSize="large"/>
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}