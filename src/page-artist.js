import React, { Component } from "react";

// Import components:
import SearchBar from "./components/search-bar";
import SimilarArtist from "./components/similar-artist";

import "./page-artist.css";
class PageArtist extends Component {
  state = {
    busqueda: "",
  };

  fetchData = async () => {
    let artista = this.props.history.location.search.substr(1);
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=6c028a05bb3337cbf567aa148b8839cf&format=json";
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMEnsaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3 " />
            <div className="col-md-6 ">
              <img
                className="pic-artist margen50"
                src="https://cdns-images.dzcdn.net/images/artist/0e5ea72d359b21b2f1f925d7a920662b/500x500.jpg"
                alt="foto"
              />
              <h2>Gustavo Ceratti</h2>
              <p>
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de
                1959-ibidem, 4 de septiembre de 2014) fue un músico, cantautor,
                actor, y productor discográfico argentino que obtuvo
                reconocimiento internacional por haber sido el líder de la banda
                de rock Soda Stereo. Es considerado por parte de la prensa,
                cantantes y críticos como uno de los músicos más influyentes del
                rock latinoamericano. Fue fundador de la banda Soda Stereo en
                1982 junto con Zeta Bosio y Charly Alberti, que establecieron
                varios récords de ventas en discos y asistencias a conciertos
                realizados en varios países. Durante un receso grupal, en 1993
                publicó su primera obra individual, Amor amarillo; antes de
                reintegrarse nuevamente con el trío. En 1999 regresó formalmente
                como solista con Bocanada, que representó un cambio en su
                carrera y estilo musical.
              </p>
            </div>
          </div>
          <SimilarArtist />
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
