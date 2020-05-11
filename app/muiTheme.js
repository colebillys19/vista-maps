import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  // component styles
  overrides: {
    // icons
    MuiSvgIcon: {
      root: {
        fontSize: 35,
      },
    },
  },
  // colors
  palette: {
    primary: {
      dark: deepPurple[300],
      light: deepPurple[100],
      main: deepPurple[900],
    },
    secondary: {
      main: amber[300],
    },
  },
});

export default theme;
