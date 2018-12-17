import React, { Component, Fragment } from 'react'
import Repositories from './Repositories';
import Followers from './Followers';
import { Switch, Route, Link } from 'react-router'
import Organizations from "./Organizations";
import TopStarRepos from "./TopStarRepos";
import TopGrownRepos from "./TopGrownRepos";

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            content: {
                0: '',
                1: '',
                2: ''
            },
            isEditable: false
        }
    }
    changeTab(index) {
        this.setState({ activeTab: index })
    };

    handleChange = (e) => {
        let text = e.target.value;
        this.setState(prevState => (
                {
                    content: Object.assign(prevState.content, { [this.state.activeTab]: text })
                }
            )
        )
    };

    changeEditMode = () => {
        this.setState(prevState => ({
            isEditable: !prevState.isEditable
        }))
    };

    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                isActive: this.state.activeTab === index,
                onClick: this.changeTab.bind(this, index)
            })
        });
        return (
            <Fragment>
                <div className='tabs-container'>
                    {children}
                </div>
                <Switch>
                    <Route exact path='/' render={() => {
                        return (
                            <div className='tab-content'>
                                <button className='edit-button' onClick={this.changeEditMode}>{this.state.isEditable ? 'Save' : 'Edit'}</button>
                                <textarea className='text-area' readOnly={!this.state.isEditable} onChange={this.handleChange} value={this.state.content[this.state.activeTab]} />
                            </div>)
                    }} />

                    <Route path='/followers' component={Followers} />
                    <Route path='/repos' component={Repositories} />
                    <Route path='/orgs' component={Organizations} />
                    <Route path='/star' component={TopStarRepos}/>
                    <Route path='/grown' component={TopGrownRepos}/>
                </Switch>
            </Fragment>
        )
    }
}