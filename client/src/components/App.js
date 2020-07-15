/* eslint-disable no-console */
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import CreateSession from './CreateSession';
import Main from './Main';
import Footer from './Footer';

import { lightTheme, darkTheme } from '../theme';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const location = useLocation();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header
          onToggleDarkMode={(DarkMode) => {
            setDarkMode(DarkMode);
          }}
          pathName={location.pathname}
        />
        <Switch>
          <Route exact path="/" component={CreateSession} />
          <Route exact path="/session/:userId" component={Main} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
