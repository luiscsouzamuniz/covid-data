import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Fetch } from "./utils/fetch";
import PageNotFound from "./components/404.js";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Screen from "./components/Screens";

class App extends Component {
  state = {
    status: false
  };

  componentDidMount = async () => await this.APIStatus();

  APIStatus = async () => {
    const result = await Fetch(
      "https://covid19-brazil-api.now.sh/api/status/v1"
    );

    this.setState({ status: result.status });
  };

  render() {
    if (this.state.status === 404) return <PageNotFound />;
    if (this.state.status === 200)
      return (
        <Router>
          <Header />
          <Container fluid>
            <Row>
              <Col>
                <Screen />
              </Col>
            </Row>
          </Container>
        </Router>
      );

    return (
      <Router>
        <Header />
        <p>loading</p>
      </Router>
    );
  }
}

export default App;
