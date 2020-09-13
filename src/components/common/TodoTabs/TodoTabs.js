import React, { useState } from 'react';
import './TodoTabs.scss';

const TodoTabs = (props) => {

  const tabs = (props.tabs) ? props.tabs : [];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const COMPLETE = 1, ERROR = -1, OK = 0;

  const changeTab = (id) => {
    setActiveTab(id);
    if(props.updateFn) props.updateFn(id);
  };

  const stateClasses = {
    [COMPLETE]: 'is-complete',
    [ERROR]:    'is-error',
    [OK]:       ''
  };
  
  return (
    <ul className="todotabs">
      {tabs.map((tab, i) => 
        <li onClick={() => changeTab(tab.id)} className={(activeTab === tab.id ? 'is-active' : '') + ` ${stateClasses[tab.status]}`} key={'tab' + i}>
          <span className="todotabs__checkboxoff material-icons">check_box_outline_blank</span>
          <span className="todotabs__checkboxon material-icons">check_box</span>
          <span className="todotabs__checkboxerror material-icons">warning</span>
          {tab.label}
        </li>
      )}
    </ul>
  );

};

export default TodoTabs;
