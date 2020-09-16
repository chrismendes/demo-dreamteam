import images from './images';

const formations = [
    {
        "id": "442",
        "title": "4-4-2",
        "image": images.formations['442'],
        "places": { 'GK': 1, 'DEF': 4, 'MID': 4, 'FWD': 2 }
    },
    {
        "id": "442d",
        "title": "4-4-2 (Diamond)",
        "image": images.formations['442d'],
        "places": { 'GK': 1, 'DEF': 4, 'MID': 4, 'FWD': 2 }
    },
    {
        "id": "541",
        "title": "5-4-1",
        "image": images.formations['541'],
        "places": { 'GK': 1, 'DEF': 5, 'MID': 4, 'FWD': 1 }
    },
    {
        "id": "352",
        "title": "3-5-2",
        "image": images.formations['352'],
        "places": { 'GK': 1, 'DEF': 3, 'MID': 5, 'FWD': 2 }
     }
];

export default formations;