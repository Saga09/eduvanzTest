import React from 'react';
import {connect} from 'react-redux';

import * as eduvanzAction from '../actions/eduvanz-actions';
import * as hu from '../genralUtility'


class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            form: {},
            errors:[]

        }
    }
    validation(field, value) {
        let errors = this.state.errors;

        if(value != '' && value != undefined)
        {
            delete errors[field];
        }
        else
        {
            errors[field] = "This field is required";

        }
        this.setState({errors: errors});
    }

    changeFormDetails(e, name){
        let value = e.target.value;
        let formField = this.state.form;
        formField[name] = value;

        this.setState({form: formField})
        this.validation(name, value);
        console.log('state ', this.state.form);
    }
    incrementValue = () => {
        this.props.dispatch(eduvanzAction.incrementalGuest())
        let count = this.props.guest;
        let value = count;
        let formField = this.state.form;
        formField['guest'] = value;

        this.setState({form: formField})

    }
    decreaseValue = () => {
        this.props.dispatch(eduvanzAction.decrementalGuest())

        let count = this.props.guest;
        let value = count;
        let formField = this.state.form;
        formField['guest'] = value;

        this.setState({form: formField})
    }
    handelSubmit(){
        let errors = this.state.errors;
        console.log('handelSubmit ', errors);

        if (hu.isEmptyObject(errors)) {
            console.log(true);
        } else {
            console.log(true);
        }
    }

    render() {
        let formDetails = this.state.form;
        let errors = this.state.errors;
        let nameError = hu.safeReturn(errors, 'fullName', '');
        let ageError = hu.safeReturn(errors, 'age', '');
        let dobError = hu.safeReturn(errors, 'DOB', '');
        let professionError = hu.safeReturn(errors, 'profession', '');
        let localityError = hu.safeReturn(errors, 'locality', '');
        let addressError = hu.safeReturn(errors, 'address', '');

        console.log('error', this.state.errors);
        return (
            <div className="form">
                <div className="form--wrapper">
                    <div className="header-text">
                        <h1>Booking Form</h1>
                    </div>
                    <div className="form--group">
                        <label>Full Name</label>
                        <input type="text" value={hu.safeReturn(formDetails, 'fullName', '')} onChange={(e) => this.changeFormDetails(e, "fullName")} />
                        {
                            nameError != '' &&
                            <p>{nameError}</p>
                        }
                    </div>
                    <div className="form--group">
                        <label>Age</label>
                        <input type="number" value={hu.safeReturn(formDetails, 'age', '')} onChange={(e) => this.changeFormDetails(e, "age")} />
                        {
                            ageError != '' &&
                            <p>{nameError}</p>
                        }
                    </div>
                    <div className="form--group">
                        <label>D.O.B</label>
                        <input type="date" onChange={(e) => this.changeFormDetails(e, "DOB")} value={hu.safeReturn(formDetails, 'DOB', '')} />
                        {
                            dobError != '' &&
                            <p>{nameError}</p>
                        }

                    </div>
                    <div className="form--group">
                        <label>Profession</label>
                        <div className="select-wrapper">
                            <select value={hu.safeReturn(formDetails, 'profession', '')} className="select" onChange={(e) => this.changeFormDetails(e, "profession")}>
                                <option value="Employed">Employed</option>
                                <option value="Student">Student</option>
                            </select>
                        </div>

                        {
                            professionError != '' &&
                            <p>{nameError}</p>
                        }


                    </div>
                    <div className="form--group">
                        <label>Locality</label>
                        <input type="text" value={hu.safeReturn(formDetails, 'locality', '')} onChange={(e) => this.changeFormDetails(e, "locality")}  />
                        {
                            localityError != '' &&
                            <p>{nameError}</p>
                        }
                    </div>
                    <div className="form--group">
                        <label>Number of Guests</label>
                        <button onClick={this.decreaseValue}>-</button>
                        <span>{this.props.guest}</span>
                        <button onClick={this.incrementValue}>+</button>
                    </div>
                    <div className="form--group">
                        <label>Address</label>
                        <textarea value={hu.safeReturn(formDetails, 'address', '')} onChange={(e) => this.changeFormDetails(e, "address")} maxLength="50"></textarea>

                        {
                            addressError != '' &&
                            <p>{nameError}</p>
                        }
                    </div>
                    <div className="form--group">
                        <span onClick={()=>this.handelSubmit()}>Submit</span>
                    </div>

                </div>

            </div>

        )
    }
}


const mapStateToProps = function (store) {
    return {
        guest: store.eduvanzState.guest
    }
}

export default connect(mapStateToProps)(Home);


