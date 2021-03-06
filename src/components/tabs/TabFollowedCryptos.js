import React from 'react';
import IconButton from '../IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DeleteIcon from '@material-ui/icons/Delete'
import CancelIcon from '@material-ui/icons/Cancel';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Link } from 'react-router-dom';

export default function TabFollowedCryptos ({
    cryptosList,
    unfollowCrypto
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

    const tradeCrypto  = (id, heldAmmount) => {
        if (heldAmmount > 0) {
            sessionStorage.setItem("sellCrypto", id)
        }
        sessionStorage.setItem("buyCrypto", id)
    }

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
                {cryptos.map((crypto, id) => (
                    <tr key={id}>
                        <td>{crypto.id}</td>
                        <td>{crypto.current_price} €</td>
                        <td style={crypto.market_cap_change_percentage_24h >= 0 ? textGreen : textRed}>
                            {crypto.market_cap_change_percentage_24h} %
                        </td>

                        { crypto.held && crypto.held > 0 
                            ? <td>{crypto.held}</td>
                            : <td><CancelIcon fontSize="large" color="secondary"/></td>
                        }
                        <td>
                            <Link to={`/crypto/${crypto.id}`}>
                                <IconButton color="blue" aria-label="shop" onClick={null}>
                                    <TrendingUpIcon fontSize="large"/>
                                </IconButton>
                            </Link>
                            <Link to={`/trading`}>
                                <IconButton color="primary" aria-label="shop" onClick={() => tradeCrypto(crypto.id, crypto.held)}>
                                    <ShoppingCartIcon fontSize="large"/>
                                </IconButton>
                            </Link>
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