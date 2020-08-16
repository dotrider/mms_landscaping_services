import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#638B1D',
      dark: '#81c784',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#A2D45E',
      dark: '#ba000d',
      contrastText: '#fff'
    },
    
  },
  typography: {
    fontFamily: ['Roboto','sans-serif'].join(','),
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.50em"
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.50em",
      color: '#254652',
      textTransform: 'uppercase'
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1.50em"
    },
}
});

export default theme

//Posible Colors

//#18232A Primary
//#297B76 secondary
//#718F72'