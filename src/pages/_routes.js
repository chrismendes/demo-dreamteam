import PickPlayersPage from './players';
import SelectTacticsPage from './tactics';
import SaveTeamPage from './save';
import CompareTeamsPage from './compare';

const routes = [
    {
        path: '/',
        component: PickPlayersPage
    },
    {
        path: '/tactics',
        component: SelectTacticsPage
    },
    {
        path: '/save',
        component: SaveTeamPage
    },
    {
        path: '/compare',
        component: CompareTeamsPage
    }
];

export default routes;
