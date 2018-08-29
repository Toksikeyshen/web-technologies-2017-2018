import { combineReducers } from 'redux'
import userData from './userData'
import userFollowersAndRepos from './userFollowersAndRepos'
import allReposReducer from './allReposReducer'

export default combineReducers({userData, info: userFollowersAndRepos, allReposReducer})