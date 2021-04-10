import React from 'react';

import TextFieldEuros from './TextFieldEuros'
import BasicTextField from './TextField'
import CustomizedButton from './Button'
import FieldWithSuggestions from './FieldWithSuggestions'

export default function Deal ({buttonName, buttonColor}) {

    return (
        <article>
            <form>
                <FieldWithSuggestions 
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
