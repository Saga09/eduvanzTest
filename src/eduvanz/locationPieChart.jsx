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
    compressArray(original)
    {
        let compressed = [];
        // make a copy of the input array
        let copy = original.slice(0);

        // first loop goes over every element
        for (let i = 0; i < original.length; i++) {

            let myCount = 0;
            // loop over every element in the copy and see if it's the same
            for (let w = 0; w < copy.length; w++) {
                if (original[i] == copy[w]) {
                    // increase amount of times duplicate is found
                    myCount++;
                    // sets item to undefined
                    delete copy[w];
                }
            }

            if (myCount > 0) {
                let a = new Object();
                a.value = original[i];
                a.count = myCount;
                compressed.push(a);
            }
        }

        return compressed;
    }



        render()
    {
        let userDetails = this.props.userDetails;
        console.log('userDetails ', userDetails);

        let city = [];

        for(let i = 0; i < userDetails.length; i++) {
            let cityName = userDetails[i].locality
                city.push(cityName)
        }

        let newArray = this.compressArray(city);
        console.log('newArray ', newArray)

        const data = []

        for(let i in newArray){
            data.push(
                {
                    label: newArray[i].value,
                    value: newArray[i].count
                }
            )
        }



        const dataSource = {
            chart: {
                caption: "Number of people by localities",
                plottooltext: "<b>$value</b> peoples from $label",
                showlegend: "1",
                showpercentvalues: "1",
                legendposition: "bottom",
                usedataplotcolorforlabels: "1",
                theme: "fusion"
            },
            data: data
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

