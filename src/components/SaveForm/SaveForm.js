import React, { useState, useEffect } from 'react';
import './SaveForm.scss';
import '../../components/common/TickOverlay/TickOverlay.scss';

const SaveForm = (props) => {

  const [userNameValue, setUserNameValue] = useState('');
  const [formStateClass, setFormStateClass] = useState('');
  const saveFn = props.saveFn || (() => {});
  const saveStatus = props.saveStatus || 0;
  const updateMode = props.updateMode || false;
  const defaultValue = props.defaultValue || false;
  const formCompleted = props.formCompleted || false;

  const stateClasses = {
    loading:  'is-loading',
    complete: 'is-complete'
  };

  const buttonText = (!updateMode) ? ((saveStatus !== 1 && !formCompleted) ? 'Save My Team': 'Saved') : ((saveStatus !== 1) ? 'Update My Team': 'Updated');

  const handleInputChange = (e) => {
    setUserNameValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStateClass(stateClasses.loading);
    saveFn({userName: userNameValue});
  };

  useEffect(() => {
    if(saveStatus === 1 || formCompleted) {
      setFormStateClass(stateClasses.complete);
    }
  }, [saveStatus, formCompleted, stateClasses]);

  useEffect(() => {
    if(defaultValue) {
      setUserNameValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <form className={`saveform loadingoverlay tickoverlay ${formStateClass}`}>
      <label htmlFor="username">Your First Name</label>
      <input type="text" name="username" value={userNameValue} onChange={handleInputChange} id="form-username" />
      <input type="submit" disabled={(saveStatus === 1 || formCompleted)} onClick={handleFormSubmit} value={buttonText} />
    </form>
  );
};

export default SaveForm;
