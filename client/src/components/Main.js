import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CreateArea from './CreateArea';
import Note from './Note';

// const useStyles = makeStyles((theme) => ({}));

function Main(props) {
  // const classes = useStyles();
  const {
    params: { userId },
  } = props.match;

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    Axios.get(`/api/?userId=${userId}`)
      .then((res) => {
        setTeamData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  function addTeam(addedTeam) {
    Axios.post('/api/add', { userId, addedTeam })
      .then((res) => {
        setTeamData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteTeam(teamId) {
    Axios.post('/api/delete', { userId, teamId })
      .then((res) => {
        ;
        setTeamData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function editTeam(editedTeamwithId) {
    const { teamData: editedTeam, teamId } = editedTeamwithId;

    Axios.post('/api/edit', { userId, teamId, editedTeam })
      .then((res) => {
        setTeamData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container component="main">
      <CreateArea onAdd={addTeam} />
      {teamData.map((team) => {
        return (
          <Note
            key={team._id}
            id={team._id}
            teamName={team.teamName}
            teamMembers={team.teamMembers}
            details={team.details}
            onDelete={deleteTeam}
            onEdit={editTeam}
          />
        );
      })}
    </Container>
  );
}

export default Main;
