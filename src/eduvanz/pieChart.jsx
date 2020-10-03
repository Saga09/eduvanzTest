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
        let rangeThree = [];

        for(let i in userDetails) {

            if((userDetails[i].age >= 13) && (userDetails[i].age <= 18) ){
                rangeOne.push(
                    userDetails[i].age
                )
            }
        }
        for(let i in userDetails) {

            if((userDetails[i].age >= 18) && (userDetails[i].age <= 25) ){
                rangeTwo.push(
                    userDetails[i].age
                )
            }
        }
        for(let i in userDetails) {

            if((userDetails[i].age <= 25)){
                rangeThree.push(
                    userDetails[i].age
                )
            }
        }

        const dataSource = {
            chart: {
                caption: "Number of people in a given age range",
                plottooltext: "<b>$percentValue</b> of people in $label date range",
                showlegend: "1",
                showpercentvalues: "1",
                legendposition: "bottom",
                usedataplotcolorforlabels: "1",
                theme: "fusion"
            },
            data: [
                    {
                        label: "13-18",
                        value: rangeOne.length
                    },
                    {
                        label: "18-25",
                        value: rangeTwo.length
                    },
                    {
                        label: "25+",
                        value: rangeThree.length
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

