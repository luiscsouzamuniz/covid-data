import React, { Component } from "react";
import "./404.css";

class PageNotFound extends Component {
  render() {
    return (
      <div className="FourOhFour">
        <div
          className="bg"
          style={{
            backgroundImage: "url('http://i.giphy.com/l117HrgEinjIA.gif')"
          }}
        />
        <div className="code">API indisponível no momento... :(</div>
      </div>
    );
  }
}

export default PageNotFound;
