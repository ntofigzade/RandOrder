import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#311b92',
    },
    background: {
      default: '#FFF',
      highlight: '#F1F3F4',
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ede7f6',
    },
    background: {
      default: '#202124',
      highlight: '#535456',
    },
  },
});

export { lightTheme, darkTheme };
