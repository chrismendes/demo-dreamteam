import PickPlayersView from './views/PickPlayers';
import SelectTacticsView from './views/SelectTactics';
import SaveTeamView from './views/SaveTeam';
import CompareTeamsView from './views/CompareTeams';

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
        component: SaveTeamView
    },
    {
        path: '/compare',
        component: CompareTeamsView
    }
];

export default routes;
