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
            users: [],
            searchValue : ""

        }
        this.filterList = this.filterList.bind(this);
        this.handelSearch = this.handelSearch.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
    }
    componentDidMount(){
        this.setState({
            users: this.props.userDetails
        });
        // this.props.dispatch(eduvanzAction.getUserDetailStatus())
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.userDetails
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
        this.setState({searchValue:value})
    }


    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getUserDetails(){
        let userDetails = this.state.users;
        let userDetailsXml = [];

        let searchValue = this.state.searchValue;

        for (let i in userDetails) {

            let fullName = userDetails[i].full_name;
            fullName = fullName.toLowerCase();
            if((searchValue.length > 0) && !(fullName.includes(searchValue.toLowerCase())))
            {
                continue;
            }


            userDetailsXml.push(
                <tr key={userDetails[i].id}>
                    <td>{userDetails[i].id}</td>
                    <td>{userDetails[i].full_name}</td>
                    <td>{this.getAge(userDetails[i].dob)}</td>
                    <td>{userDetails[i].dob}</td>
                    <td>{userDetails[i].profession}</td>
                    <td>{userDetails[i].locality}</td>
                    <td>{userDetails[i].address}</td>
                    {/*<td>{userDetails[i].guest}</td>*/}
                </tr>
            )
        }
        return userDetailsXml
    }

    render() {
        return (
            <div className="admin--panel">
                <div className="search">
                    <input type="text" placeholder="Search by name" onChange={(e)=> this.handelSearch(e)} />
                </div>
                <div className="user--details-table">
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>D.O.B</th>
                            <th>Profession</th>
                            <th>Locality</th>
                            <th>Address</th>
                        </tr>

                        {this.getUserDetails()}
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

