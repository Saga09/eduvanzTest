import React from 'react';
import {connect} from 'react-redux';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";


charts(FusionCharts);


class PieChart extends React.Component {
    constructor(props)
    {
        super(props);

    }

    componentDidMount(){

    }
    render()
    {
        let userDetails = this.props.userDetails;
        console.log('userDetails ', userDetails);

        let rangeOne = [];
        let rangeTwo = [];

        for(let i in userDetails) {

            if((userDetails[i].profession == 'Employed')){
                rangeOne.push(
                    userDetails[i].profession
                )
            }
        }
        for(let i in userDetails) {

            if((userDetails[i].profession == 'Students')){
                rangeTwo.push(
                    userDetails[i].profession
                )
            }
        }

        const dataSource = {
            chart: {
                caption: "Number of people in a given age range",
                    plottooltext: "<b>$percentValue</b> of people count $label",
                showlegend: "1",
                showpercentvalues: "1",
                legendposition: "bottom",
                usedataplotcolorforlabels: "1",
                theme: "fusion"
            },
            data: [
                    {
                        label: "Employed",
                        value: rangeOne.length
                    },
                    {
                        label: "Student",
                        value: rangeTwo.length
                    }
                ]
        };


        return(
            <div className="chart--wrapper">
                <ReactFusioncharts
                    type="pie2d"
                    width="100%"
                    dataFormat="JSON"
                    dataSource={dataSource}
                />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        userDetails: store.eduvanzState.userDetails
    }
}

export default connect(mapStateToProps)(PieChart);

