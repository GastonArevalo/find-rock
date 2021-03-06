import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-result";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentWillMount() {
    console.log("componentWillMount()", "Antes del meotodo render");
  }
  componentDidMount() {
    console.log("luego del metodo render");
  }
  componentWillUnmount() {
    console.log(
      "componentWillUnmount()",
      "despues de que se cierre el componente"
    );
  }
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log("metodo render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
