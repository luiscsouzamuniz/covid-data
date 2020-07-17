import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { Fetch } from "../utils/fetch";

export class Chart extends Component {
  state = {
    series: [],
    options: [],
    loading: true,
    dateTime: null
  };

  componentDidMount = async () => {
    const {
      result: { data }
    } = await Fetch("https://covid19-brazil-api.now.sh/api/report/v1");

    const categories = data.map(list => list.state);

    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };

    const date = new Date(data.map(list => list.datetime)[0]);

    const series = [
      {
        name: "Confirmados",
        data: data.map(list => list.cases)
      },
      {
        name: "Suspeitos",
        data: data.map(list => list.suspects)
      },
      {
        name: "Mortes",
        data: data.map(list => list.deaths)
      }
    ];

    const options = {
      chart: {
        type: "bar",
        height: "100%"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories,
        title: {
          text: "N° de pessoas"
        }
      },
      yaxis: {
        title: {
          text: "Estados"
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " pessoas";
          }
        }
      }
    };

    if (options && series) {
      this.setState({
        options,
        series,
        dateTime: date.toLocaleDateString("pt-BR", dateOptions),
        loading: false
      });
    }
  };

  render() {
    if (this.state.loading) return null;
    return (
      <>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
          />
        </div>
        <p>Data e hora de atualização: {this.state.dateTime}</p>
      </>
    );
  }
}
