import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import ArtistCard from "./components/artist-card";
import SearchBar from "./components/search-bar";

function App() {
  return (
    <React.Fragment>
      <SearchBar />
      <div className="container">
        <div className="row">

          <ArtistCard img="https://i.pinimg.com/474x/d0/32/26/d032262ab185923049f8b20d670ecdae.jpg" titulo="Iron Maiden" />
          <ArtistCard img="https://www.rafabasa.com/wp-content/uploads/imagenes/web/dream_theater/portadas/metropilis_pt2scenes_from_a_memory300vinilo.jpg" titulo="Dream Theater" />
          <ArtistCard img="https://img.discogs.com/e-hLnBN1C-Li6qGJBGziW-ZWqe8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4837246-1614952548-7332.jpeg.jpg" titulo="Slayer" />
          <ArtistCard img="http://persimusic.com/wp-content/uploads/2013/09/megadeth-peace-sells.jpg" titulo="Megadeth" />

        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
