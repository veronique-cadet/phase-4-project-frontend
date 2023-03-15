import React, { Component } from "react";
import Chart from "react-apexcharts";



class DataTable extends Component {
  constructor({currentCareer, setCurrentCareer}) {
    super({currentCareer, setCurrentCareer});

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
          data: [currentCareer?.salary_1, currentCareer?.salary_2, currentCareer?.ave_salary, currentCareer?.salary_3, currentCareer?.salary_4
          ]
          // data: [currentCareer.salary_1,currentCareer.salary_2, currentCareer.ave_salary,currentCareer.salary_3, currentCareer.salary_4
          // ]
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