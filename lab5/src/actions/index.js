export const searchUser  = (data) => {
    return {
        type: 'FETCH_USER_SUCCESSFUL',
        data
    }
};

export const searchFollowersAndRepos = (data) => {
    return {
        type: 'FETCH_INFO_SUCCESSFUL',
        data
    }
};

export const searchAllRepos = (data) => {
    return {
        type: 'FETCH_ALL_REPOS_SUCCESSFUL',
        data
    }
};