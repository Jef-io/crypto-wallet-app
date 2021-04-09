import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";


const blueTheme = createMuiTheme ({
    palette: {
      primary: {
        light: '#41a9ee',
        main: '#1294ea',
        dark: '#0c67a3'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
});

export default function TextFieldEuros () {

    return (
        <ThemeProvider theme={blueTheme}>
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
