import React from 'react';
import TextField from '@material-ui/core/TextField';

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

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

export default function BasicTextField ({label}) {

  return (
    <ThemeProvider theme={blueTheme}>
      <TextField color="primary" label={label} variant="filled" />
      </ThemeProvider>
  );
}
