import React from 'react';
import IconButton from '../IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Link } from 'react-router-dom';

export default function TabWallet ({
    wallet
}) {

    const tradeCrypto = (id, type) => {
        if (type === "buy") {
            sessionStorage.setItem("buyCrypto", id)
            return;
        }
        sessionStorage.setItem("sellCrypto", id)
    }

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
                {wallet.map((crypto, id) => (
                    crypto.held > 0 
                    ?
                    <tr key={id}>
                        <td>{crypto.id}</td>
                        <td>{crypto.held}</td>
                        <td>{crypto.current_price} €</td>
                        <td>{crypto.current_price*crypto.held} €</td>
                        <td>
                            <Link to="/trading">
                                <IconButton color="primary" onClick={() => tradeCrypto(crypto.id, "buy")}>
                                    <AddShoppingCartIcon fontSize="large"/>
                                </IconButton>
                            </Link>
                            <Link to="/trading">
                                <IconButton color="primary" onClick={() => tradeCrypto(crypto.id, "sell")} >
                                    <MonetizationOnIcon fontSize="large"/>
                                </IconButton>
                            </Link>
                        </td>
                    </tr>
                    : null
                ))}
            </tbody>
        </table>
    );
}