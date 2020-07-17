import React, { Component } from "react";
import { Fetch } from "../utils/fetch";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

export class Country extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount = async () => {
    const {
      result: { data }
    } = await Fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil");

    this.setState({
      data,
      loading: false
    });
  };

  render() {
    const { loading, data } = this.state;

    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };

    const date = new Date(data.updated_at);

    if (loading) return null;
    return (
      <>
        <Row className="mt-1">
          <Col>
            <h3>Situação do Brasil</h3>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col md={3} className="mt-1">
            <Card
              body
              style={{ height: "150px" }}
              className="text-center font-weight-bold"
              inverse
              color="warning"
            >
              <CardTitle>Casos ativos</CardTitle>
              <CardText>{data.cases} pessoas</CardText>
            </Card>
          </Col>
          <Col md={3} className="mt-1">
            <Card
              body
              style={{ height: "150px" }}
              className="text-center font-weight-bold"
              inverse
              color="danger"
            >
              <CardTitle>Mortes</CardTitle>
              <CardText>{data.deaths} pessoas</CardText>
            </Card>
          </Col>
          <Col md={3} className="mt-1">
            <Card
              body
              style={{ height: "150px" }}
              className="text-center font-weight-bold"
              inverse
              color="success"
            >
              <CardTitle>Recuperados</CardTitle>
              <CardText>{data.recovered} pessoas</CardText>
            </Card>
          </Col>
          <Col md={3} className="mt-1">
            <Card
              body
              style={{ height: "150px" }}
              className="text-center font-weight-bold"
              inverse
              color="info"
            >
              <CardTitle>Total de casos</CardTitle>
              <CardText>{data.confirmed} pessoas</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>
              Atualizado em {date.toLocaleDateString("pt-BR", dateOptions)}
            </small>
          </Col>
        </Row>
      </>
    );
  }
}
