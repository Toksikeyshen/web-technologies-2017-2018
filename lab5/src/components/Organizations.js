import React from 'react'
import { connect } from 'react-redux'
import { CreateList } from "./Fields"
import '../App.css'
import {fetchFollowersReposOrgs} from "../actions/sagasActions";

class Organizations extends React.Component{
    componentDidMount = () => {
        this.props.searchFollowersAndRepos(this.props.store)
    };
    render(){
        return(
            <CreateList from={this.props.store.info.organizations} property='login' className='list'/>
        )
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        searchFollowersAndRepos: (state) => {
            dispatch(fetchFollowersReposOrgs(state))
        }
    }))(Organizations)