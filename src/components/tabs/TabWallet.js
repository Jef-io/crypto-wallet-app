import React from 'react';
import IconButton from '../IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default function TabWallet ({
    wallet
}) {

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
                            <IconButton color="primary">
                                <AddShoppingCartIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="primary">
                                <MonetizationOnIcon fontSize="large"/>
                            </IconButton>
                        </td>
                    </tr>
                    : null
                ))}
            </tbody>
        </table>
    );
}