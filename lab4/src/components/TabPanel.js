import React, { Component } from 'react'
import '../App.css'

export default class TabPanel extends Component{
    render(){
        return (
            <div className={this.props.isActive?'tab-active':'tab'} onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
}