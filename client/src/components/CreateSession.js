import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateSession(props) {
  const classes = useStyles();
  const [sessionId, setSessionId] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setSessionId(value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create/Enter a session id
        </Typography>
        <form className={classes.form} autoComplete="off">
          <TextField
            onChange={handleChange}
            value={sessionId}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="sessionId"
            label="Session id"
            name="sessionId"
            autoComplete=""
            autoFocus
          />
          {sessionId ? <Button
            type="submit"
            component={RouterLink}
            to={`/session/${sessionId}`}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            GO TO THE SESSION
          </Button> : <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              GO TO THE SESSION
          </Button>}

        </form>
      </div>
    </Container>
  );
}
