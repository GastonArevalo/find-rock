import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("Este es el input y el evento es:", e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "Evento click");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mt-2">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="logo FindRock" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <form
              className="form-inline d-flex"
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
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
