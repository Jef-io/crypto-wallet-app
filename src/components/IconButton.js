import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BlueTheme } from "../css/CustomTheme";
import IconButton from '@material-ui/core/IconButton'

const CustomIconButton = ({
    children,
    color
}) => {

    return (
        color === "blue"
        ? <ThemeProvider theme={BlueTheme}><IconButton color="primary">{children}</IconButton></ThemeProvider>
        : <IconButton color={color}>{children}</IconButton>
    )
}

export default CustomIconButton;