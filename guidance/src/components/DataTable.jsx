import React, { Component } from "react";
import Chart from "react-apexcharts";



class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1, 2, "Average", 3, 4],
          title: {
            text: "Salary Range for Profession",
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
            }
        },
      },
  
        markers: {
          colors: ["#39FF14"
        ]
       },
       fill: {
        colors: ["#39FF14"]
      }
        
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49]
        }
      ]
     
     
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DataTable;