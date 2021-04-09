import { createMuiTheme } from '@material-ui/core/styles';

const greenRedTheme = createMuiTheme ({
  palette: {
    primary: {
        light: '#91d66e',
        main: '#76cc4a',
        dark: '#528e33',
    },
    secondary: {
      light: '#e25555',
      main: '#db2b2b',
      dark: '#991e1e',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

export default greenRedTheme ;