import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

export default function SelectField ({label, options, onChange}) {

    const [state, setOption] = React.useState("");

    const handleChange = (event) => {
        setOption(event.target.value);
        if (onChange) onChange(event);
    };

    return (
        <ThemeProvider theme={blueTheme}>
            <FormControl variant="filled" className="SelectField" color="primary">
                <InputLabel htmlFor="select" color="primary">{label}</InputLabel>
                <Select
                    native
                    color="primary"
                    value={state.option}
                    onChange={handleChange}
                    label={label}
                    inputProps={{
                        name: {label},
                        id: "select",
                    }}
                >
                    <option aria-label="None" value="" />
                    {options.map((option, id) => (
                            <option key={id} value={option}>{option}</option>
                    ))}
                </Select>
            </FormControl>
        </ThemeProvider>
    );

}