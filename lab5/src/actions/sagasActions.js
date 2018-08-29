export const fetchUserData = () => {
    return{
        type: 'FETCH_USER_DATA'
    }
};

export const fetchFollowersReposOrgs = (state) => {
    return{
        type: 'FETCH_FRO_DATA',
        state
    }
};

export const fetchAllRepos = () => {
    return {
        type: 'FETCH_ALL_REPOS_DATA',
    }
};