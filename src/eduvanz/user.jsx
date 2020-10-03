import React from 'react';
import {connect} from 'react-redux';

import * as eduvanzAction from '../actions/eduvanz-actions';
import * as hu from '../genralUtility'
import {NavLink} from "react-router-dom";

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
    }
    componentDidMount(){

    }
    render() {
        let query = window.location.hash;
        let vars = query.split("=");
        let newArray = vars;
        let ID = hu.safeReturn(newArray, '1', '');
        let userDetails = this.props.userDetails;
        let item = userDetails.find(item => item.id == ID);
        console.log('item ', item)


        return (
            <div className="admin--panel user--details">
                <ul>
                    <li><label>Full Name:</label> <span>{item.full_name}</span></li>
                    <li><label>Age:</label> <span>{item.age}</span></li>
                    <li><label>Date Of Birth:</label> <span>{item.dob}</span></li>
                    <li><label>Guest:</label> <span>{item.guest}</span></li>
                    <li><label>Locality:</label> <span>{item.locality}</span></li>
                    <li><label>Profession:</label> <span>{item.profession}</span></li>
                    <li><label>Address:</label> <span>{item.address}</span></li>
                </ul>
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

