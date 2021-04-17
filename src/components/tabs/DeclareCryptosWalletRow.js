import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BasicTextField from '../fields/TextField';

const DeclareCryptosWalletRow = ({
    id
}) => {


    const [ammount, setAmmount] = useState(0);

    const handleChange = (value) => {
        if (value >= 0) setAmmount(value);
    }

    return (
        <tr>
            <td>{id}</td>
            <td>
                <BasicTextField 
                    label="Montant" type="number" required
                    onChange={(e) => handleChange(e.target.value)} 
                    value={ammount}
                />
            </td>
            <td>
                <IconButton 
                    color="primary" aria-label="shop" 
                    onClick={() => console.log((crypto.id))}
                    disabled={ammount <= 0}
                >
                    <AddCircleIcon fontSize="large"/>
                </IconButton>
            </td>
        </tr>
    )
}

export default DeclareCryptosWalletRow;