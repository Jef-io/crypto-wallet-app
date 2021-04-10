import React from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { BlueTheme } from '../css/CustomTheme'

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
        <ThemeProvider theme={BlueTheme}>
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
