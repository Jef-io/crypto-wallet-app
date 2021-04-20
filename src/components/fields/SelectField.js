import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { ThemeProvider } from '@material-ui/styles';
import { BlueTheme } from '../../css/CustomTheme'

export default function SelectField ({label, options, onChange, defaultValue}) {

    const [state, setOption] = React.useState("");

    const handleChange = (event) => {
        setOption(event.target.value);
        if (onChange) onChange(event);
    };

    return (
        <ThemeProvider theme={BlueTheme}>
            <FormControl variant="outlined" className="SelectField" color="primary">
                <Select
                    native
                    color="primary"
                    value={state.option}
                    onChange={handleChange}
                    required
                    defaultValue={defaultValue}
                >
                    <option aria-label="None" value="" />
                    {options.map((option, id) => (
                            <option key={id} value={option}>{option}</option>
                    ))}
                </Select>
                <FormHelperText id="outlined-helper-text">valeur en euros</FormHelperText>
            </FormControl>
        </ThemeProvider>
    );

}