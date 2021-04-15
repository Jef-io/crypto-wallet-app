import React from 'react';
import TextField from '@material-ui/core/TextField';

import { ThemeProvider } from '@material-ui/styles'
import { BlueTheme } from '../css/CustomTheme'

export default function BasicTextField ({label}) {

  return (
    <ThemeProvider theme={BlueTheme}>
      <TextField color="primary" label={label} variant="filled" disableUnderline required/>
    </ThemeProvider>
  );
}
