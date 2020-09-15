import React, { useContext } from 'react';
import SlideShow from '../common/SlideShow';
import UserSessionContext from '../../contexts/UserSessionContext';
import formations from '../../data/formations';

const FormationSelector = () => {
  const userSessionState = useContext(UserSessionContext);
  const [userFormation, setUserFormation] = userSessionState.formation;
  const activeSlide = formations.map(({id}) => id).indexOf(userFormation.id);

  return (
    <SlideShow slides={formations} active={activeSlide} button="Change Formation" update={setUserFormation} />
  );
};

export default FormationSelector;
