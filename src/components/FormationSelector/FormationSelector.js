import React, { useContext } from 'react';
import SlideShow from '../common/SlideShow';
import UserSessionContext from '../../session/UserSessionContext';
import formations from '../../data/formations';

const FormationSelector = () => {
  const userSessionState = useContext(UserSessionContext);
  // eslint-disable-next-line
  const [_, setUserFormation] = userSessionState.formation;
  
  return (
    <SlideShow slides={formations} button="Change Formation" update={setUserFormation} />
  );
};

export default FormationSelector;
