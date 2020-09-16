import image442 from './img/formations/442.png';
import image442d from './img/formations/442d.png';
import image541 from './img/formations/541.png';
import image352 from './img/formations/352.png';

const formations = [
    {
        "id": "442",
        "title": "4-4-2",
        "image": image442,
        "places": { 'GK': 1, 'DEF': 4, 'MID': 4, 'FWD': 2 }
    },
    {
        "id": "442d",
        "title": "4-4-2 (Diamond)",
        "image": image442d,
        "places": { 'GK': 1, 'DEF': 4, 'MID': 4, 'FWD': 2 }
    },
    {
        "id": "541",
        "title": "5-4-1",
        "image": image541,
        "places": { 'GK': 1, 'DEF': 5, 'MID': 4, 'FWD': 1 }
    },
    {
        "id": "352",
        "title": "3-5-2",
        "image": image352,
        "places": { 'GK': 1, 'DEF': 3, 'MID': 5, 'FWD': 2 }
     }
];

export default formations;