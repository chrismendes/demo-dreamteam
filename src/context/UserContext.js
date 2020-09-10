import { createContext } from 'react';
import formations from '../data/formations';

// export const UserFormationContext = createContext({
//   selection: '442'
// });


// export const UserPlayersContext = createContext({
//   'gk':  [],
//   'def': [],
//   'mid': [],
//   'fwd': []

// });

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
