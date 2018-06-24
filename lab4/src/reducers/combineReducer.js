import { combineReducers } from 'redux'
import userData from './userData'
import userFollowersAndRepos from './userFollowersAndRepos'

export default combineReducers({userData, info: userFollowersAndRepos})
