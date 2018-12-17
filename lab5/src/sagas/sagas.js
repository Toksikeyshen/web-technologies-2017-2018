import { call, put, takeEvery } from 'redux-saga/effects'
import { getResponse, getFollowersAndRepos, getAllRepos } from '../apiService/gitApi'
import * as actions from '../actions'

const topStarReposUrl = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=5';
const topFastGrowingUrl = 'https://api.githnub.com/search/repositories?q=trending%3A%3E0&sort=stars&per_page=5&since=weekly&#39';
const allReposUrl = 'https://api.github.com/search/repositories?q=';

function searchUser(login) {
    return getResponse(login)
        .then(({ avatar_url, name, login, bio, company, location, blog, followers_url, repos_url, organizations_url }) => {
            return {
                userAvatar: avatar_url,
                userName: name,
                userLogin: login,
                userBio: bio,
                userCompany: company,
                userLocation: location,
                userBlog: blog,
                userFollowers: followers_url,
                userRepositories: repos_url,
                userOrganizations: organizations_url,
                starRepos: topStarReposUrl,
                grownRepos: topFastGrowingUrl
            }
        })
}

async function searchRepos(name) {
    return (await getAllRepos(allReposUrl, name)).items
}

function* fetchAllRepos() {
    const repo = document.getElementById('repos').value;
    try {
        const data = yield call(() => searchRepos(repo));
        yield put(actions.searchAllRepos(data));
    }
    catch (e) {
        yield put({ type: 'FETCH_ALL_REPOS_ERROR' });
    }
}

function* fetchUserData() {
    const search = document.getElementById('search').value;
    try {
        const data = yield call(() => searchUser(search));
        yield put(actions.searchUser(data));
    }
    catch (e) {
        yield put({ type: 'FETCH_DATA_ERROR' });
    }
}

function* fetchFollowersReposOrgs(action) {
    try {
        const data = yield call(() => getFollowersAndRepos(action.state.userData.userFollowers, action.state.userData.userRepositories, action.state.userData.userOrganizations, action.state.userData.starRepos, action.state.userData.grownRepos));
        yield put(actions.searchFollowersAndRepos(data));
    }
    catch (e) {
        yield put({ type: 'FETCH_INFO_ERROR' })
    }
}

export default function* watcher() {
    yield takeEvery('FETCH_USER_DATA', fetchUserData);
    yield takeEvery('FETCH_FRO_DATA', fetchFollowersReposOrgs);
    yield takeEvery('FETCH_ALL_REPOS_DATA', fetchAllRepos);
}