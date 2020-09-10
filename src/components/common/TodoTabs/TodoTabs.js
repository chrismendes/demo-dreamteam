import React, { useState } from 'react';
import './TodoTabs.scss';

const TodoTabs = (props) => {

  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (i) => {
    setActiveTab(i);
  };

  return (
    <ul className="todotabs">
      {props.tabs.map((tab, i) => 
        <li onClick={() => changeTab(i)} className={activeTab === i ? 'is-active' : ''} key={'tab' + i}>
          <span className="todotabs__checkboxoff material-icons">check_box_outline_blank</span>
          <span className="todotabs__checkboxon material-icons">check_box</span>
          {tab}
        </li>
      )}
    </ul>
  );
};

export default TodoTabs;
