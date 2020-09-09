import React, { useState } from 'react';
import image442 from './img/442.png';
import image442d from './img/442d.png';
import image541 from './img/541.png';
import image352 from './img/352.png';
import SlideSwitcher from '../common/SlideSwitcher';
import './FormationSelect.scss';

const formations = [
  { id: '442',  title: '4-4-2', image: image442 },
  { id: '442d', title: '4-4-2 (Diamond)', image: image442d },
  { id: '541',  title: '5-4-1', image: image541 },
  { id: '352',  title: '3-5-2', image: image352 }
];

const FormationSelect = () => {
  const [selection, setSelection] = useState(0);

  return (
    <SlideSwitcher options={formations} button="Change Formation" state={selection} updateState={setSelection} />
  );
};

export default FormationSelect;
