import React, { useContext } from 'react';
import SlideShow from '../common/SlideShow';
import UserTeamContext from '../../context/UserContext';
import formations from '../../data/formations';

const FormationSelector = () => {
  const [userTeamState, setUserTeamState] = useContext(UserTeamContext);

  const setFormation = (newFormation) => {
    setUserTeamState({
      ...userTeamState,
      formation: newFormation
    });
  };
  
  return (
    <SlideShow slides={formations} button="Change Formation" update={setFormation} />
  );
};

export default FormationSelector;
