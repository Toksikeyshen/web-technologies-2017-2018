import React from 'react'
import { connect } from 'react-redux'
import { CreateListForRepos } from "./Fields"
import '../App.css'
import {fetchFollowersReposOrgs} from "../actions/sagasActions";

class Repositories extends React.Component{
    componentDidMount = () => {
        this.props.searchFollowersAndRepos(this.props.store)
    };
    render(){
        return(
            <CreateListForRepos from={this.props.store.info.repositories} property='name' property1='language' property2='private' className='list'/>
        )
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        searchFollowersAndRepos: (state) => {
            dispatch(fetchFollowersReposOrgs(state))
        }
    }))(Repositories)