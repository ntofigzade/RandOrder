import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Brightness1 as LightModeIcon, Brightness3 as DarkModeIcon } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  logoIcon: {
    marginRight: theme.spacing(1),
    position: 'relative',
    bottom: theme.spacing(0.1),
    color: theme.palette.text.primary,
  },
  appBar: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
  },
}));

export default (props) => {
  const { pathName } = props;
  const [isDarkMode, setDarkMode] = React.useState(false);

  const classes = useStyles();

  props.onToggleDarkMode(isDarkMode);

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <ReorderRoundedIcon className={classes.logoIcon} />
          <Typography component="h1" variant="h6" className={classes.grow}>
            Randorder
          </Typography>
          <Tooltip title={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}>
            <IconButton onClick={() => setDarkMode((prev) => !prev)}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
          {pathName !== '/' && (
            <Tooltip title="Leave the session">
              <IconButton component={RouterLink} to="/">
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
