import React, { useEffect, useState } from 'react';
import TextFieldEuros from './fields/TextFieldEuros'
import BasicTextField from './fields/TextField'
import CustomizedButton from './Button'
import SelectField from './fields/SelectField';

export default function Deal ({buttonName, buttonColor, cryptos, isSelling, onValidation}) {
    
    const [crypto, setCrypto] = useState();
    const [ammount, setAmmount] = useState(0)
    const [value, setValue] = useState("")

    const handleChange = (value) => {
        if (isSelling && crypto
            ? value >= 0 && value <= cryptos.find(value => value.id === crypto).held 
            : value >= 0) setAmmount(value)
    }

    useEffect(() => {
        setValue(crypto ? cryptos.find(value => value.id === crypto).current_price*ammount : "");
    }, [crypto, ammount, cryptos])

    return (
        <article>
            <form>
                <SelectField label="Crypto" options={cryptos.map(crypto => crypto.id)} onChange={(e) => setCrypto(e.target.value)} />
                <BasicTextField  
                    label="Montant" type="number" 
                    value={ammount} color="blue" 
                    required onChange={(e) => handleChange(e.target.value)}
                />
                <TextFieldEuros value={value}/>
                <CustomizedButton 
                    value={buttonName} color={buttonColor} 
                    isDisabled={!crypto || !ammount || parseInt(ammount) === 0}
                    onClick={() => onValidation({
                        crypto_id: crypto,
                        ammount: ammount,
                        value: value
                    }, isSelling ? "sell" : "buy")}
                />
            </form> 
        </article>
    );
}
