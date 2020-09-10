// import React from 'react';
import React, { useState, useContext } from 'react';
import SlideShow from '../common/SlideShow';
import UserTeamContext from '../../context/UserContext';
import formations from '../../data/formations';

const FormationSelector = () => {
  const [userTeamState, setUserTeamState] = useContext(UserTeamContext);
  
  const changeFormation = (formation) => {
    setUserTeamState({
      formation: formation
    });
  };
  
  return (
    <SlideShow slides={formations} button="Change Formation" update={changeFormation} />
  );
};

export default FormationSelector;
