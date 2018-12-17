import React from 'react'
import { connect } from 'react-redux'
import { CreateList } from "./Fields"
import '../App.css'
import { fetchFollowersReposOrgs } from "../actions/sagasActions";

class TopRepos extends React.Component{
    componentDidMount = () => {
        this.props.searchFollowersAndRepos(this.props.store)
    };
    render(){
        return(
            <CreateList from={this.props.store.info.starRepos.items} property='name' className='list'/>
        )
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        searchFollowersAndRepos: (state) => {
            dispatch(fetchFollowersReposOrgs(state))
        }
    }))(TopRepos)