import React from 'react';
import {connect} from 'react-redux';

import * as eduvanzAction from '../actions/eduvanz-actions';
import * as hu from '../genralUtility'


class Admin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            form: {},
            errors:[],
            users: this.props.userDetails

        }
        this.filterList = this.filterList.bind(this);
    }
    componentDidMount(){
        this.props.dispatch(eduvanzAction.getUserDetailStatus())
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users
        });
    }
    filterList(event) {

        let users = this.state.users;
        users = users.filter(function(user){
            //unsure what to do here
        });
        this.setState({users: users});
    }

    handelSearch(e){
        let value = e.target.value


    }
    getUserDetails(userDetails){
        let userDetailsXml = []

        console.log('userDetails---- ', userDetails);

        for (let i in userDetails) {
            userDetailsXml.push(
                <tr>

                    <td>{userDetails[i].id}</td>
                    <td>{userDetails[i].full_name}</td>
                    <td>{userDetails[i].age}</td>
                    <td>{userDetails[i].dob}</td>
                    <td>{userDetails[i].profession}</td>
                    <td>{userDetails[i].locality}</td>
                    <td>{userDetails[i].guest}</td>
                </tr>
            )
        }
        return userDetailsXml
    }

    render() {
        let userDetails = this.props.userDetails;

        let newAray = userDetails.findIndex(x => x.id === '2');
        console.log('newarray ', newAray);

        return (
            <div>
                <div>
                    <input type="text" onChange={(e)=> this.handelSearch(e)}/>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>D.O.B</th>
                            <th>Profession</th>
                            <th>Locality</th>
                            <th>No of Guests</th>
                        </tr>

                            {this.getUserDetails(userDetails)}
                    </table>
                </div>
            </div>

        )
    }
}


const mapStateToProps = function (store) {
    return {
        userDetails: store.eduvanzState.userDetails
    }
}

export default connect(mapStateToProps)(Admin);


