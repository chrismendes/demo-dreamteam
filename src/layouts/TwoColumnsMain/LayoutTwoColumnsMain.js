import React from 'react';
import './LayoutTwoColumnsMain.scss';

const LayoutTwoColumnsMain = (props) => (
  <div className="l-twocolumnsmain two-third">
      {props.children}
  </div>
);

export default LayoutTwoColumnsMain;
