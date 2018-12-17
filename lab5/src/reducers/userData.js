const initState = {
    userAvatar: '',
    userName: '',
    userLogin: '',
    userBio: '',
    userCompany: '',
    userLocation: '',
    userBlog: '',
    userFollowers: '',
    userRepositories: '',
    userOrganizations: '',
    starRepos:'',
    grownRepos:''
};

export default function userData(state = initState, action) {
    switch (action.type){
        case 'FETCH_USER_SUCCESSFUL':
            return Object.assign({}, state, action.data);
        case 'FETCH_USER_ERROR':
            return initState;
        default:
            return state;
    }
}