import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

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
                {wallet.map((crypto) => (
                    <tr>
                        <td>{crypto.id}</td>
                        <td>{crypto.held}</td>
                        <td>{crypto.current_price} €</td>
                        <td>{crypto.current_price*crypto.held} €</td>
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