const tasks = [
    {
        title: 'Pick Your Players',
        description: 'Choose your formation and eleven players from below.',
        link: '/tactics'
    },
    {
        title: 'Select Your Tactics',
        description: 'Drag your players into their positions on the pitch.',
        link: '/save'
    },
    {
        title: 'Save Your Team',
        description: 'Enter your first name and continue to review other submitted teams.',
        link: '/save'
    }
];

const progressBarSteps = [
    {
        title: 'Pick Players',
        link:  '/'
    },
    {
        title: 'Select Tactics',
        link:  '/tactics'
    },
    {
        title: 'Save Team',
        link:  '/save'
    },
    {
        title: 'Compare Teams',
        link:  '/compare'
    }
];

export default {
    tasks: tasks,
    progressBarSteps: progressBarSteps
};
