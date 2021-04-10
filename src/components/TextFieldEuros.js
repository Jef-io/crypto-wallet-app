import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { BlueTheme } from '../css/CustomTheme'


import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";

export default function TextFieldEuros () {

    return (
        <ThemeProvider theme={BlueTheme}>
            <FormControl
            label="valeur en euros"
            variant="filled"
            >
            <InputLabel htmlFor="adornment-field" color="primary">valeur en euros</InputLabel>
            <FilledInput
                id="adornment-field"
                endAdornment={
                <InputAdornment position="end">€</InputAdornment>
                } 
                disabled
            />
            </FormControl>
        </ThemeProvider>
    );
}
