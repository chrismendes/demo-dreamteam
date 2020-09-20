import React, { useContext } from 'react';
import UserSessionContext from '../../contexts/UserSessionContext';
import './SaveForm.scss';
import '../../components/common/TickOverlay/TickOverlay.scss';

const SaveForm = () => {

  const userSessionState = useContext(UserSessionContext);
  const [userPlayers] = userSessionState.players;

  return (
    <div className="saveform loadingoverlay tickoverlay is-complete _is-loading">
      <label htmlFor="username">Your Name</label>
      <input type="text" name="username" />
      {/* <button>Save My Team</button> */}
      <button disabled>Saving...</button>
    </div>
  );
};

export default SaveForm;
