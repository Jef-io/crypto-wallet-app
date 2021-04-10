import React, { useState, useRef } from "react";
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { ThemeProvider } from '@material-ui/styles'
import { BlueTheme } from '../css/CustomTheme'
import TextField from '@material-ui/core/TextField';

const FieldWithSuggestions = ({label,suggestions}) => {

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const onUserInput = (value) => {
    const filteredSuggestion = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setFilteredSuggestions([...filteredSuggestion]);
    setOpen(true);
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={BlueTheme}>
      <TextField 
        color="primary" 
        label={label} 
        variant="filled" 
        disableUnderline 
        required
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onChange={(e) => onUserInput(e.target.value)}
      />
      <Popper 
        open={open} 
        anchorEl={anchorRef.current} 
        role={undefined} 
        transition disablePortal 
        placement="bottom-start"
      >
        {({ TransitionProps}) => (
          <Grow
            {...TransitionProps}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow">
                  {
                    filteredSuggestions.map((value) => 
                      <MenuItem onClick={() => handleClose()}>{value}</MenuItem>
                    )
                  }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ThemeProvider>
  )
}
export default FieldWithSuggestions
