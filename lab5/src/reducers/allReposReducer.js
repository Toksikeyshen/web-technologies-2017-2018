const initState = {
    allRepos:[]
};

export default function allReposReducer(state = initState, action) {
    switch (action.type){
        case 'FETCH_ALL_REPOS_SUCCESSFUL':
            return Object.assign({}, state, {allRepos:action.data});
        case 'FETCH_ALL_REPOS_ERROR':
            return initState;
        default:
            return state;
    }
}