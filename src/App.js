import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import Button from 'react-bootstrap/Button'; // React BootstrapのButtonコンポーネントをインポート
import './App.css';
import IgaNavbar from './IgaNavbar.js';

function App() {
  return (
    <div className="App">
      <header>
        <IgaNavbar />
      </header>
      <main>
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
