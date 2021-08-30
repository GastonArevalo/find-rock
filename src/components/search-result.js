import React, { Component } from "react";

import ArtistCard from "./artist-card";
let termino;
class SearchResult extends Component {
  state = {
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  termino = "metallica";
  componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=6c028a05bb3337cbf567aa148b8839cf&format=json"
    );
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo que trae la api");
    this.setState({ data: data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
