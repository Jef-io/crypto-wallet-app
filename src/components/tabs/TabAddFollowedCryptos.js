import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function TabAddFollowedCryptos ({
    cryptosList,
    addCrypto
}) {

    const cryptos = cryptosList ? cryptosList : [];

    const textGreen = {
        color:'#76cc4a',
        fontWeight:'bold'
    }

    const textRed = {
        color:'#db2b2b',
        fontWeight:'bold'
    }

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
                {cryptos.map((crypto, id) => (
                    <tr key={id}>
                        <td>{crypto.id}</td>
                        <td>{crypto.current_price} €</td>
                        <td style={crypto.market_cap_change_percentage_24h >= 0 ? textGreen : textRed}>
                            {crypto.market_cap_change_percentage_24h} %
                        </td>
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