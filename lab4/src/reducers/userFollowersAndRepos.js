const initState = {
    followers: [],
    repositories: [],
    organizations: []
};

export default function userFollowersAndRepos(state = initState, action) {
    switch (action.type){
        case 'FETCH_INFO_SUCCESSFUL':
            return Object.assign({}, state, action.data);
        case 'FETCH_INFO_ERROR':
            return initState;
        default:
            return state;
    }
}