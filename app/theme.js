import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
  
const theme = createTheme({
    palette: {
        primary: {
            main: '#0f2335',
            accent: '#bf2659',
        },
        secondary: {
            main: '#cce5df',
        },
        background: {
            default: '#fdfcfa',
        },
        text: {
            primary: '#0f2335',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;