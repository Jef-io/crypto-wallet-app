import React from 'react';

import TextFieldEuros from './fields/TextFieldEuros'
import BasicTextField from './fields/TextField'
import CustomizedButton from './Button'
import FieldWithSuggestions from './fields/FieldWithSuggestions'

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
