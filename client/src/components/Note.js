/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {
  Typography,
  makeStyles,
  Container,
  TextField,
  Fade,
  Button,
  ClickAwayListener,
  Grow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    marginLeft: theme.spacing(0.5),
  },
  dataArea: {
    margin: '30px auto',
    padding: '15px 15px 5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '8px',
    borderColor: 'rgb(95, 99, 104)',
    boxSizing: 'border-box',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));

function Note(props) {
  const classes = useStyles();
  const [isMouseEnter, setMouseEnter] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [teamData, setTeamData] = useState({
    teamName: props.teamName,
    teamMembers: props.teamMembers,
    details: props.details,
  });
  const [animation, setAnimation] = useState(true);

  function handleClick() {
    if (isEditMode) {
      const teamId = props.id;
      props.onEdit({ teamData, teamId });
    }
    setEditMode((prev) => !prev);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTeamData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      onClickAway={() => {
        setEditMode(false);
      }}
    >
      <Grow in={animation} timeout={{ enter: 500, exit: 500 }}>
        <Container
          className={classes.dataArea}
          maxWidth="sm"
          onMouseEnter={() => {
            setMouseEnter(true);
          }}
          onMouseLeave={() => {
            setMouseEnter(false);
          }}
          style={
            isEditMode || isMouseEnter ? { boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.3)' } : null
          }
        >
          {isEditMode ? (
            <Fade in={isEditMode} timeout={750}>
              <div>
                <form autoComplete="off">
                  <TextField
                    name="teamName"
                    label="Presentation name"
                    value={teamData.teamName}
                    onChange={handleChange}
                    type="text"
                    fullWidth
                    multiline
                    rowsMax="2"
                    InputProps={{ disableUnderline: true }}
                  />
                  <TextField
                    name="teamMembers"
                    label="Team members"
                    value={teamData.teamMembers}
                    onChange={handleChange}
                    type="text"
                    fullWidth
                    multiline
                    rowsMax="10"
                    InputProps={{ disableUnderline: true }}
                  />
                  <TextField
                    name="details"
                    label="Details"
                    value={teamData.details}
                    onChange={handleChange}
                    type="text"
                    fullWidth
                    multiline
                    rowsMax="10"
                    InputProps={{ disableUnderline: true }}
                  />
                </form>
              </div>
            </Fade>
          ) : (
              <>
                <Typography variant="body1">{teamData.teamName}</Typography>
                <Typography variant="body2">{teamData.teamMembers}</Typography>
                <Typography variant="body2">{teamData.details}</Typography>
              </>
            )}
          {isEditMode ? (
            <div className={classes.wrapper}>
              <Button size="small" onClick={handleClick}>
                Save
              </Button>
            </div>
          ) : (
              <Fade in={isMouseEnter}>
                <div className={classes.wrapper}>
                  <Tooltip title="Edit">
                    <IconButton onClick={handleClick} aria-label="Edit" className={classes.button}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => {
                        setAnimation(false);
                        setTimeout(() => {
                          props.onDelete(props.id);
                        }, 500);
                      }}
                      aria-label="delete"
                      className={classes.button}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </Fade>
            )}
        </Container>
      </Grow>
    </ClickAwayListener>
  );
}

export default Note;
