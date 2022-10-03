import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#312e81',
    },
    secondary: {
      main: '#312e81',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;