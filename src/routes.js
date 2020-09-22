import PickPlayersPage from './pages/players';
import SelectTacticsPage from './pages/tactics';
import SaveTeamPage from './pages/save';
import CompareTeamsPage from './pages/compare';

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
