import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { ThemeProvider } from '@material-ui/styles'
import { BlueTheme } from '../../css/CustomTheme'

export default function BasicTextField ({label, required, className, onChange, color, type, defaultValue}) {

  const checkColor = color ? color : "primary" ;

  return (
    checkColor === "blue" ?
      <ThemeProvider theme={BlueTheme}>
        <FormControl className={className ?? "Field"} variant="outlined">
          <OutlinedInput
            color="primary"
            id="outlined"
            onChange={onChange ? e =>  onChange(e) : null}
            aria-describedby="outlined-helper-text"
            inputProps={{
              'aria-label': {label},
            }}
            required={required ?? false}
            type={type}
            defaultValue={defaultValue}
            notched
            fullWidth
          />
          {label ?
            <FormHelperText id="outlined-helper-text">{label}</FormHelperText>
          : null}
        </FormControl>
      </ThemeProvider>
    : 
      <FormControl className={className ?? "Field"} variant="outlined">
        <OutlinedInput
          color="primary"
          id="outlined"
          onChange={onChange ? e =>  onChange(e) : null}
          aria-describedby="outlined-helper-text"
          inputProps={{
            'aria-label': {label},
          }}
          required={required ?? false}
          type={type}
          defaultValue={defaultValue}
          notched
          fullWidth
        />
        {label ?
          <FormHelperText id="outlined-helper-text">{label}</FormHelperText>
        : null}
      </FormControl>
  );
}
