import React, { Component } from "react";
import { Fetch } from "../utils/fetch";
import { Table as Tabela, Row, Col } from "reactstrap";

export class Table extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount = async () => {
    const {
      result: { data }
    } = await Fetch("https://covid19-brazil-api.now.sh/api/report/v1");

    this.setState({
      data,
      loading: false
    });
  };

  render() {
    if (this.state.loading) return null;
    return (
      <Row className="mt-1" style={{ maxHeight: "550px", overflow: "auto" }}>
        <Col md={6} className="offset-md-3">
          <Tabela className="table-hover" style={{ width: "100%" }}>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Estado</th>
                <th>Confirmados</th>
                <th>Mortes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((list, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{list.state}</td>
                  <td>{list.cases}</td>
                  <td>{list.deaths}</td>
                </tr>
              ))}
            </tbody>
          </Tabela>
        </Col>
      </Row>
    );
  }
}
