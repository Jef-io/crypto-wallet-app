import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BasicTextField from '../fields/TextField';


export default function TabDeclareCryptosWallet ({
    cryptosList,
    addCrypto,
    declare
}) {

    const [ammounts, setAmmounts] = useState({});

    const handleChange = (value, id) => {
        if (value >= 0) setAmmounts({...ammounts, [id]: value})
    }

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
                {cryptosList.map((crypto, id) => (
                    <tr key={id}>
                        <td>{crypto.id}</td>
                        <td>
                            <BasicTextField 
                                label="Montant" type="number" required
                                onChange={(e) => handleChange(e.target.value, crypto.id)} 
                                value={ammounts[crypto.id] ?? ""}
                            />
                        </td>
                        <td>
                            <IconButton 
                                color="primary" aria-label="shop" 
                                disabled={ammounts[crypto.id] ? ammounts[crypto.id] <= 0 : true}
                                onClick={() => declare(crypto.id, ammounts[crypto.id], crypto.current_price)}
                            >
                                <AddCircleIcon fontSize="large"/>
                            </IconButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}