import React from 'react';
import TextField from '@material-ui/core/TextField';

import { ThemeProvider } from '@material-ui/styles'
import { BlueTheme } from '../../css/CustomTheme'

export default function BasicTextField ({label, required, className, onChange}) {

  return (
    <ThemeProvider theme={BlueTheme}>
      <TextField onChange={onChange ? e =>  onChange(e) : null} className={className ?? "Field"} color="primary" label={label} variant="filled" disableUnderline required={required ?? false}/>
    </ThemeProvider>
  );
}
