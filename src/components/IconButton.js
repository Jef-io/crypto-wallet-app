import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BlueTheme } from "../css/CustomTheme";
import IconButton from '@material-ui/core/IconButton'

const CustomIconButton = ({
    children,
    color,
    onClick,
    disabled
}) => {

    return (
        color === "blue"
        ? <ThemeProvider theme={BlueTheme}><IconButton disabled={disabled} onClick={() => onClick()} color="primary">{children}</IconButton></ThemeProvider>
        : <IconButton disabled={disabled} onClick={() => onClick()} color={color}>{children}</IconButton>
    )
}

export default CustomIconButton;