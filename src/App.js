import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>iga</h1>
        <div name="link">
          <h2>link</h2>
          <p>
            <a href="https://twitter.com/igawile">X</a><br />
            <a href="https://www.instagram.com/igawile/">instagram</a><br />
            <a href="https://www.youtube.com/@wileiga/videos">YouTube</a><br />
            <a href="https://soundcloud.com/iganels">Soundcloud</a><br />
            <a href="https://igaxe.bandcamp.com/">bandcamp</a><br />
          </p>
        </div>
      </header>
      <main>
        <ul name="menu">
          <li><a href="#about">about</a></li>
          <li><a href="#link">link</a></li>
        </ul>
        <div name="gallery">
          <div className="right">
            <iframe
              id="ytplayer"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SXDcCrMAzZw?si=o1gUvb-H_OhexUne"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <img src="" alt="pic1" />
          <img src="" alt="pic2" />
          <img src="" alt="pic3" />
          <img src="" alt="pic4" />
        </div>
        <div name="about">
          <h2>about</h2>
          <p>福井を拠点に活動するミュージシャン、アーティスト。<br />2005年生まれ。</p>
          <p>iga is a musician and artist based in Fukui.<br />Born in 2005.</p>
          <img src="iga.jpg" alt="iga.jpg" width="300" height="400" />
        </div>
      </main>
      <footer>
        <p>© igawile</p>
        <p>Design: hkskshn</p>
      </footer>
    </div>
  );
}

export default App;
