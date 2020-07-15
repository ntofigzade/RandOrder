/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, TextField, ClickAwayListener, Container, Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    marginLeft: theme.spacing(0.5),
  },
  createArea: {
    margin: '30px auto',
    padding: '15px 15px 5px',
    boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.2)',
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

function CreateArea(props) {
  const classes = useStyles();
  const [isExpanded, setExpanded] = React.useState(false);
  const [teamData, setTeamData] = React.useState({ teamName: '', teamMembers: '', details: '' });

  function handleChange(event) {
    const { name, value } = event.target;

    setTeamData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function submitData(event) {
    event.preventDefault();
    props.onAdd(teamData);
    setExpanded(false);
    setTeamData({ teamName: '', teamMembers: '', details: '' });
  }

  return (
    <ClickAwayListener
      onClickAway={() => {
        setExpanded(false);
      }}
    >
      <Container className={classes.createArea} maxWidth="sm">
        <form autoComplete="off" onSubmit={submitData}>
          <TextField
            name="teamName"
            label={isExpanded ? 'Presentation name' : 'Add new entry'}
            value={teamData.teamName}
            required={isExpanded}
            onChange={handleChange}
            onClick={() => {
              setExpanded(true);
            }}
            type="text"
            fullWidth
            multiline
            rowsMax="2"
            InputProps={{ disableUnderline: true }}
            style={{ marginTop: '0' }}
          />
          <Collapse in={isExpanded}>
            <>
              <TextField
                name="teamMembers"
                label="Team members"
                value={teamData.teamMembers}
                required
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
              <div className={classes.wrapper}>
                <Tooltip title="Add">
                  <IconButton type="submit" aria-label="add" className={classes.button}>
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          </Collapse>
        </form>
      </Container>
    </ClickAwayListener>
  );
}

export default CreateArea;
