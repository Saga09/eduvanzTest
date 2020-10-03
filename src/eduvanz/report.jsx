import React from 'react';
import {connect} from 'react-redux';
import PieChart from './pieChart'
import GuestPieChart from './guestPieChart'
import LocationPieChart from './locationPieChart'
import ProfessionalsPieChart from './professionalstPieChart'


class Admin extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {


        }
    }
    shouldComponentUpdate(){

    }
    componentWillReceiveProps(nextProps)
    {

    }
    render() {
        let userDetails = this.props.userDetails
        console.log('userDetails ', userDetails);
        return (
            <div className="report--details">
                <div className="row">
                    <div className="col-sm-6">
                        <LocationPieChart />
                    </div>
                    <div className="col-sm-6">
                        <PieChart />
                    </div>
                    <div className="col-sm-6">
                        <GuestPieChart />
                    </div>
                    <div className="col-sm-6">
                        <ProfessionalsPieChart />
                    </div>

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

