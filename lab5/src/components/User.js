import React, { Fragment } from 'react';
import { faUsers, faMapMarkerAlt, faLink} from '@fortawesome/fontawesome-free-solid'
import '../App.css'
import { CreateText, CreateImg, CreateLink } from './Fields';
import { CreateInput } from "./Inputs";
import { connect } from 'react-redux'
import {fetchUserData} from "../actions/sagasActions";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            req: false,
            data:{}
        };
        this.getUser = this.getUser.bind(this);
    }
    getUser() {
        this.props.searchUser();
        this.setState({req:true})
    }
    render(){
        if(this.props.store.userData){
            return(
                <Fragment>
                    <CreateInput action={this.getUser}/>
                    <CreateImg className="img-style" src={this.props.store.userData.userAvatar}/>
                    <CreateText className="name-style" value={this.props.store.userData.userName}/>
                    <CreateText className="login-style" value={this.props.store.userData.userLogin}/>
                    <CreateText className="bio-style" value={this.props.store.userData.userBio}/>
                    <CreateText className="company-style" value={this.props.store.userData.userCompany} icon={faUsers}/>
                    <CreateText className="location-style" value={this.props.store.userData.userLocation} icon={faMapMarkerAlt}/>
                    <CreateLink className="blog-style" value={this.props.store.userData.userBlog} icon={faLink}/>
                </Fragment>
            )
        }
        else{
            return(
                <Fragment>
                    <CreateInput action={this.getUser}/>
                </Fragment>
            )
        }
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        searchUser: () => {
            dispatch(fetchUserData())
        }
    }))(User)