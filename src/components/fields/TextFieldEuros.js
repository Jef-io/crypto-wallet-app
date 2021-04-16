import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { BlueTheme } from '../../css/CustomTheme'

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function TextFieldEuros () {

    return (
        <ThemeProvider theme={BlueTheme}>
            <FormControl variant="outlined">
                <OutlinedInput
                    color="primary"
                    id="outlined-adornment"
                    endAdornment={
                        <InputAdornment position="end">€</InputAdornment>
                    } 
                    aria-describedby="outlined-helper-text"
                    inputProps={{
                        'aria-label': "valeur en euros",
                    }}
                    disabled
                />
                <FormHelperText id="outlined-helper-text">valeur en euros</FormHelperText>
            </FormControl>
        </ThemeProvider>
    );
}
