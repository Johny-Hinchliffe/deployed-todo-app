import {createTheme } from '@mui/material/styles';
import { red, grey, blue } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: red[800],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

  export default theme