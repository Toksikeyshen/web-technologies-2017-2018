import { getResponse, getFollowersAndRepos } from "../apiService/gitApi";

export const searchUser = () => (dispatch) => {
    const inp = document.getElementById('search').value;
    getResponse(inp)
        .then(({avatar_url, name, login, bio, company, location, blog, followers_url, repos_url, organizations_url}) => {
            dispatch({
                type: 'FETCH_USER_SUCCESSFUL',
                data: {
                    userAvatar: avatar_url,
                    userName: name,
                    userLogin: login,
                    userBio: bio,
                    userCompany: company,
                    userLocation: location,
                    userBlog: blog,
                    userFollowers: followers_url,
                    userRepositories: repos_url,
                    userOrganizations: organizations_url
                }
            })
        })
        .catch((e) => {
            dispatch({type: 'FETCH_USER_ERROR'})
        })
};

export const searchFollowersAndRepos = (state) => (dispatch) => {
    getFollowersAndRepos(state.userData.userFollowers, state.userData.userRepositories, state.userData.userOrganizations)
        .then((response) => {
            dispatch({
                type: 'FETCH_INFO_SUCCESSFUL',
                data: response
            })
        })
        .catch((e) => {
            dispatch({type: 'FETCH_INFO_ERROR'})
        })
};
