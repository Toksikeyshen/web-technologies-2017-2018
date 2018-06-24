import React from 'react'
import { searchFollowersAndRepos} from "../actions/index"
import { connect } from 'react-redux'
import { CreateList } from "./Fields"
import '../App.css'

class Repositories extends React.Component{
    componentDidMount = () => {
        this.props.searchFollowersAndRepos(this.props.store)
    };
    render(){
        return(
            <CreateList from={this.props.store.info.repositories} property='name' className='list'/>
        )
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        searchFollowersAndRepos: (state) => {
            dispatch(searchFollowersAndRepos(state))
        }
    }))(Repositories)