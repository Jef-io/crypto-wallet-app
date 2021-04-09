import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme ({
  palette: {
    info: {
      light: '#41a9ee',
      main: '#1294ea',
      dark: '#0c67a3'
    },
    primary: {
      light: '#e25555',
      main: '#db2b2b',
      dark: '#991e1e',
    },
    secondary: {
        light: '#91d66e',
        main: '#76cc4a',
        dark: '#528e33',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

export default customTheme;