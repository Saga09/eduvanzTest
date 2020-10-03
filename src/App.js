import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './eduvanz/header'
import HomePage from './eduvanz/home'
import Admin from './eduvanz/admin'
import User from './eduvanz/user'
import Report from './eduvanz/report'
import './App.css';

import {connect} from 'react-redux';
import * as eduvanzAction from './actions/eduvanz-actions';



class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            price: '',
            date: ''
        };

    }

    componentDidMount()
    {
        // this.props.dispatch(action.getAuthenticationStatus())
        //this.props.dispatch(upstoxAction.fetchData(this.props.intervel))

    }

    render()
    {

        return (
            <div className="App">
                <div className="container">
                    <HashRouter>
                        <Header/>
                        <Switch>
                            <Route path="/home:activeTab?" component={HomePage}/>
                            <Route path="/admin:activeTab?" component={Admin}/>
                            <Route path="/user/:id?" component={User}/>
                            <Route path="/report" component={Report}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </HashRouter>

                </div>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        guest: store.eduvanzState.guest
    }
}

export default connect(mapStateToProps)(App);
