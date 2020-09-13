import React, { useContext } from 'react';
import SlideShow from '../common/SlideShow';
import UserTeamContext from '../../context/UserContext';
import formations from '../../data/formations';

const FormationSelector = () => {
  const userTeamSelectionState = useContext(UserTeamContext);
  // eslint-disable-next-line
  const [_, setUserFormation] = userTeamSelectionState.formation;
  
  return (
    <SlideShow slides={formations} button="Change Formation" update={setUserFormation} />
  );
};

export default FormationSelector;
