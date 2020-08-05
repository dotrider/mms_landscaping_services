import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#4caf50',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
  // typography: {
  //   fontFamily: [
  //     'Montserrat Alternates',
  //     'sans-serif'
  //   ].join(',')
  // }
});

export default theme