import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
class PageHome extends React.Component {
  state = {
    busqueda: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} id="logo" alt="Logo" />
            <form
              className="form-inline"
              name="formulario"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  type="text"
                  id="buscar"
                  placeholder="Buscar"
                  onChange={this.props.onChange}
                  name="busqueda"
                  value={this.props.busqueda}
                />
              </div>
              <div className="actions">
                <button className="btng">Search Similar Artist</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PageHome;
