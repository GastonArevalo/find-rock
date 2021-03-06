import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margen50">
          <div className="col-md-12">
            <h5>Similar Artist</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="https://place-hold.it/350x350" titulo="test" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://place-hold.it/350x350" titulo="test" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://place-hold.it/350x350" titulo="test" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://place-hold.it/350x350" titulo="test" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
