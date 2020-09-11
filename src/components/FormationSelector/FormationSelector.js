import React, { useContext } from 'react';
import SlideShow from '../common/SlideShow';
import UserTeamContext from '../../context/UserContext';
import formations from '../../data/formations';

const FormationSelector = () => {
  const [userTeamSelection, setUserTeamSelection] = useContext(UserTeamContext);

  const setFormation = (newFormation) => {
    setUserTeamSelection({
      ...userTeamSelection,
      formation: newFormation
    });
  };
  
  return (
    <SlideShow slides={formations} button="Change Formation" update={setFormation} />
  );
};

export default FormationSelector;
