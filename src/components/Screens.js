import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Chart } from "./Chart";
import { Table } from "./Table";
import { Country } from "./Country";
import PerState from "./PerState";

class Screen extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Country} />
        <Route path="/tabela" component={Table} />
        <Route path="/geral" component={Chart} />
        <Route path="/estado/" component={PerState} />
      </Switch>
    );
  }
}

export default Screen;
