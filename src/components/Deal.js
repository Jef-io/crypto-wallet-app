import React from 'react';

import TextFieldEuros from './TextFieldEuros'
import BasicTextField from './TextField'
import CustomizedButton from './Button'
import SelectField from './SelectField'
import SearchBar from './SearchBar'

export default function Deal ({buttonName, buttonColor}) {

    return (
        <article>
            <form>
                <SearchBar 
                    label="Crypto" 
                    suggestions = {['BTC','DOGE']}
                />
                <BasicTextField label="Montant"/>
                <TextFieldEuros/>
                <CustomizedButton value={buttonName} color={buttonColor}/>
            </form> 
        </article>
    );
}
