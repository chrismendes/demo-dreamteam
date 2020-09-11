import React, { useState } from 'react';
import './TodoTabs.scss';

const TodoTabs = (props) => {

  const [activeTab, setActiveTab] = useState(props.tabs[0].id);

  const changeTab = (id) => {
    setActiveTab(id);
    if(props.updateFn) props.updateFn(id);
  };

  const stateClasses = {
    '1':  'is-complete',
    '-1': 'is-error',
    '0':  ''
  };

  return (
    <ul className="todotabs">
      {props.tabs.map((tab, i) => 
        <li onClick={() => changeTab(tab.id)} className={(activeTab === tab.id ? 'is-active' : '') + ` ${stateClasses[tab.status]}`} key={'tab' + i}>
          <span className="todotabs__checkboxoff material-icons">check_box_outline_blank</span>
          <span className="todotabs__checkboxon material-icons">check_box</span>
          {tab.label}
        </li>
      )}
    </ul>
  );
};

export default TodoTabs;
