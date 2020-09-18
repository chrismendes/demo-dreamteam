import React from 'react';
import './SelectableTable.scss';

const SelectableTable = (props) => {

  // const updateAppState = props.updateFn;
  // const toggleSelection = () => {
  //   if(updateAppState) updateAppState(props.id);
  // };

  const rowData = props.rows;
  const columnLabels = props.cols;

  const rowListItems = rowData.map((row, i) => {
    return (
      <li key={i}>
        <span>{row.userName}</span>
        <span>{row.formation}</span>
      </li>
    );
  });

  const colListItems = columnLabels.map((col, i) => {
    return (
      <span key={i}>{col}</span>
    );
  });

  return (
    <div className="selectabletable">
      <div className="selectabletable__cols">
        {colListItems}
      </div>
      <ul className="selectabletable__rows">
        {rowListItems}
      </ul>
    </div>
  );
};

export default SelectableTable;
