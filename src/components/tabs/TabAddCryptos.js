import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function TabCryptos ({
    cryptosList,
    addCrypto
}) {

    const cryptos = cryptosList ? cryptosList : [];

    return (
        <table className="TabCryptos">
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th>Cours</th>
                    <th>24 heures</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cryptos.map((crypto) => (
                    <tr>
                        <td>{crypto.id}</td>
                        <td>{crypto.current_price} €</td>
                        <td>{crypto.market_cap_change_percentage_24h} %</td>
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