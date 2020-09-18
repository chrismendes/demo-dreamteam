import React, { useState } from 'react';
import './SelectableTable.scss';

const SelectableTable = (props) => {

  const rowData = props.rows;
  const columnLabels = props.cols;
  const updateExternally = props.updateFn || null;

  const [selectedRow, setSelectedRow] = useState(0);

  const selectRow = (rowIndex) => {
    setSelectedRow(rowIndex);
    if(updateExternally) updateExternally(rowIndex);
  };

  const rowListItems = rowData.map((row, i) => {
    return (
      <li key={i} className={(i === selectedRow ? 'is-selected' : '')} onClick={() => { selectRow(i) }}>
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
