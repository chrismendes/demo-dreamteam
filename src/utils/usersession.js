import formations from '../data/formations';

export default class UserSession {

  constructor() {
    this.defaults = {
      checklist:    [ false, false, false ],
      players:      [],
      formation:    formations[0],
      userName:     null,
      dbRef:        null,
      dataString:   null
    };
  }
  
  updateLocalStorage(userState) {
    for(const key of Object.keys(userState)) {
      localStorage.setItem(key, JSON.stringify(userState[key][0]));
    }
  }

  getProp(prop) {
    return (JSON.parse(localStorage.getItem(prop)) || this.defaults[prop]);
  }
  
}
