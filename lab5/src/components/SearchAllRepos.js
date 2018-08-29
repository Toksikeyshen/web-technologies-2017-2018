import React, { Fragment } from 'react';
import '../App.css'
import { CreateList } from './Fields';
import { InputForRepos } from "./Inputs";
import { connect } from 'react-redux'
import {fetchAllRepos} from "../actions/sagasActions";

class AllRepos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            req: false,
            data:{}
        };
        this.getAllRepos = this.getAllRepos.bind(this);
    }
    getAllRepos() {
        this.props.searchAllRepos();
        this.setState({req:true})
    }
    render(){
        if(this.props.store.allReposReducer){
            return(
                <Fragment>
                    <InputForRepos action={this.getAllRepos}/>
                    <CreateList from={this.props.store.allReposReducer.allRepos} property='name'/>
                </Fragment>
            )
        }
        else{
            return(
                <Fragment>
                    <InputForRepos action={this.getAllRepos}/>
                </Fragment>
            )
        }
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        searchAllRepos: () => {
            dispatch(fetchAllRepos())
        }
    }))(AllRepos)