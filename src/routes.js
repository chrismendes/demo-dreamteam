import PickPlayersView from './views/PickPlayers';
import SelectTacticsView from './views/SelectTactics';

const routes = [
    {
        path: '/',
        component: PickPlayersView
    },
    {
        path: '/tactics',
        component: SelectTacticsView
    },
    {
        path: '/save',
        component: SelectTacticsView
    },
    {
        path: '/compare',
        component: SelectTacticsView
    }
];

export default routes;
