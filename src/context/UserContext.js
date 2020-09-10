import { createContext } from 'react';
import formations from '../data/formations';

const UserTeamContext = createContext({
  formation: formations[0],
  players: {
    'GK':  [],
    'DEF': [],
    'MID': [],
    'FWD': [] 
  }
});

export default UserTeamContext;
