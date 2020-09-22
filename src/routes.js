import PickPlayersPage from './pages/PickPlayers';
import SelectTacticsPage from './pages/SelectTactics';
import SaveTeamPage from './pages/SaveTeam';
import CompareTeamsPage from './pages/CompareTeams';

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
