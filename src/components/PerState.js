import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class PerState extends Component {
  state = {
    series: [
      {
        name: "Confirmados",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 200, 300, 1000]
      },
      {
        name: "Mortes",
        data: [1, 2, 5, 10, 15, 20, 32, 40, 50, 100, 122, 150]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Dados por estado",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ]
      }
    }
  };

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default PerState;
