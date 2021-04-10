import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

export default function CustomizedButton ({color, value, onClick, className, isDisabled}) {

  const checkColor = color ? color : "primary" ;
  const checkClassName = className ? className : "Button" ;

  const style = {
    fontWeight : "bold",
    padding : "1.5vh",
    color:'white',
  }

  return (
    checkColor === "blue" ?
        <ThemeProvider theme={blueTheme}>
            <Button 
                onClick={() => onClick ? onClick() : null} 
                style={style} 
                color="primary" 
                variant="contained" 
                className={checkClassName}
                disabled={isDisabled}
            >
                {value}
            </Button>
        </ThemeProvider>
    : 
        <Button 
            onClick={() => onClick ? onClick() : null} 
            style={style} 
            color={checkColor}
            variant="contained" 
            className={checkClassName}
            disabled={isDisabled}
        >
            {value}
        </Button>
  );
}
