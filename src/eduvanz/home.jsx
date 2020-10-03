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
            errors:[],
            modal: false

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
        //console.log('state ', this.state.form);
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
    validateRequiredFields(){
        let fieldsToValidate = ['fullName','age','DOB','profession','locality', 'address'];
        let formDetails = this.state.form;

        console.log('validation ', formDetails);
        for(let i in fieldsToValidate)
        {
            let list = fieldsToValidate[i];
            let value = hu.safeReturn(formDetails, list, '')

            console.log('fieldsToValidate[i] ', fieldsToValidate[i]);
            console.log('formDetails[i] ', formDetails[i]);
            console.log('formDetails----- ', value);

            this.validation(fieldsToValidate[i],value);
        }

    }
    handelSubmit(){
        this.validateRequiredFields()
        let errors = this.state.errors;
        let errorLength = Object.keys(errors).length;

        if (errorLength === 0 ) {
            this.setState({modal: !this.state.modal})

        } else {
            console.log(false);
        }
    }
    handelSubmitNModal(){
        let formDetails = this.state.form;
        this.props.dispatch(eduvanzAction.receivedUserDetails(formDetails))
        this.setState({modal: !this.state.modal})
    }
    closeModal(){
        this.setState({modal: false})
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

        console.log('user', this.props.user);
        console.log('formDetails', formDetails);

        return (
            <div className="form">
                {
                    !this.state.modal &&

                    <div className="form--wrapper">
                        <div className="header-text">
                            <h1>Booking Form</h1>
                        </div>
                        <div className="form--group">
                            <label>Full Name</label>
                            <input type="text" className="form-textbox"
                                   value={hu.safeReturn(formDetails, 'fullName', '')}
                                   onChange={(e) => this.changeFormDetails(e, "fullName")}/>
                            {
                                nameError != '' &&
                                <p className="error">{nameError}</p>
                            }
                        </div>
                        <div className="form--group">
                            <label>Age</label>
                            <input type="number" className="form-textbox" value={hu.safeReturn(formDetails, 'age', '')}
                                   onChange={(e) => this.changeFormDetails(e, "age")}/>
                            {
                                ageError != '' &&
                                <p className="error">{ageError}</p>
                            }
                        </div>
                        <div className="form--group">
                            <label>D.O.B</label>
                            <input type="date" className="form-number-input form-textbox"
                                   onChange={(e) => this.changeFormDetails(e, "DOB")}
                                   value={hu.safeReturn(formDetails, 'DOB', '')}/>
                            {
                                dobError != '' &&
                                <p className="error">{dobError}</p>
                            }

                        </div>
                        <div className="form--group">
                            <label>Profession</label>
                            <div className="select-wrapper">
                                <select value={hu.safeReturn(formDetails, 'profession', '')} className="form-dropdown"
                                        onChange={(e) => this.changeFormDetails(e, "profession")}>
                                    <option value="Employed">Employed</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>

                            {
                                professionError != '' &&
                                <p className="error">{professionError}</p>
                            }


                        </div>
                        <div className="form--group">
                            <label>Locality</label>
                            <input type="text" className="form-textbox"
                                   value={hu.safeReturn(formDetails, 'locality', '')}
                                   onChange={(e) => this.changeFormDetails(e, "locality")}/>
                            {
                                localityError != '' &&
                                <p className="error">{localityError}</p>
                            }
                        </div>
                        <div className="form--group">
                            <label>Number of Guests</label>
                            <div className="form-spinner-input">
                                <button onClick={this.decreaseValue}>-</button>
                                <span>{this.props.guest}</span>
                                <button onClick={this.incrementValue}>+</button>
                            </div>
                        </div>
                        <div className="form--group">
                            <label>Address</label>
                            <textarea className="form-textarea" value={hu.safeReturn(formDetails, 'address', '')}
                                      onChange={(e) => this.changeFormDetails(e, "address")} maxLength="50"></textarea>

                            {
                                addressError != '' &&
                                <p className="error">{addressError}</p>
                            }
                        </div>
                        <div className="form--group submit--form">
                            <span className="submit-button" onClick={() => this.handelSubmit()}>Submit</span>
                        </div>

                    </div>
                }
                {
                    this.state.modal &&
                    <div className="modal">
                        <h1>Are your sure</h1>
                        <div className="admin--panel user--details">
                            <ul>
                                <li><label>Full Name:</label> <span>{formDetails.fullName}</span></li>
                                <li><label>Age:</label> <span>{formDetails.age}</span></li>
                                <li><label>Date Of Birth:</label> <span>{formDetails.DOB}</span></li>
                                <li><label>Guest:</label> <span>{formDetails.guest}</span></li>
                                <li><label>Locality:</label> <span>{formDetails.locality}</span></li>
                                <li><label>Profession:</label> <span>{formDetails.profession}</span></li>
                                <li><label>Address:</label> <span>{formDetails.address}</span></li>
                            </ul>
                        </div>

                        <div className="submit-buttons">
                            <span onClick={()=> this.closeModal()}>Edit</span>
                            <span onClick={() =>this.handelSubmitNModal()}>Submit</span>
                        </div>
                    </div>
                }


            </div>

        )
    }
}


const mapStateToProps = function (store) {
    return {
        guest: store.eduvanzState.guest,
        user: store.eduvanzState.user
    }
}

export default connect(mapStateToProps)(Home);


