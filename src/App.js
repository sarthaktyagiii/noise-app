import logo from "./logo.svg";
import "./App.css";
import { Howl, Howler } from "howler";

function App() {
  const rain = new Howl({
    src: ["https://www.mboxdrive.com/rain.mp3"],
    html5: true,
    loop: true,
  });
  const wind = new Howl({
    src: [
      "https://www.mboxdrive.com/howling-winter-storm-ambient-sounds-6756.mp3",
    ],
    html5: true,
    loop: true,
  });
  const brown = new Howl({
    src: ["https://www.mboxdrive.com/brown.mp3"],
    html5: true,
    loop: true,
  });
  const bird = new Howl({
    src: ["https://www.mboxdrive.com/bird.mp3"],
    html5: true,
    loop: true,
  });
  const people = new Howl({
    src: ["https://www.mboxdrive.com/people.mp3"],
    html5: true,
    loop: true,
  });
  const waterfall = new Howl({
    src: ["https://www.mboxdrive.com/waterfall.mp3"],
    html5: true,
    loop: true,
  });
  const white = new Howl({
    src: ["https://www.mboxdrive.com/white.mp3"],
    html5: true,
    loop: true,
  });
  const frog = new Howl({
    src: ["https://www.mboxdrive.com/frogs.mp3"],
    html5: true,
    loop: true,
  });
  const pink = new Howl({
    src: ["https://www.mboxdrive.com/pink.mp3"],
    html5: true,
    loop: true,
  });
  const ocean = new Howl({
    src: ["https://www.mboxdrive.com/ocean%20(online-audio-converter.com).mp3"],
    html5: true,
    loop: true,
  });

  const thunderr = new Howl({
    // https://www.mboxdrive.com/thunder.mp3
    src: [
      "https://cdn.pixabay.com/download/audio/2022/03/25/audio_f3ed2e72d2.mp3?filename=epic-storm-thunder-rainwindwaves-no-loops-106800.mp3",
    ],
    html5: true,
    loop: true,
  });
  return (
    // navbar
    <>
      <div>
        <header className="App-header sticky">
          <h3>Noises</h3>
          <nav>
            <ul className="navlinks">
              <li>
                <a href="">Support Us</a>
              </li>
              <li>
                <a href=""> About Developer</a>
              </li>
            </ul>
          </nav>
          <button className="Theme">Theme</button>
        </header>
        <body className="content">
          <h5>**Instructions at the bottom**</h5>
          <div className="flexbox-container">
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => rain.play()}
                  src="/images/rain.png"
                  alt=""
                />
                <h5 onClick={() => rain.pause()}>Rain</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => wind.play()}
                  src="/images/wind.png"
                  alt=""
                />
                <h5 onClick={() => wind.pause()}>Wind</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => thunderr.play()}
                  src="/images/thunder.png"
                  alt=""
                />
                <h5 onClick={() => thunderr.pause()}>Thunder</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => bird.play()}
                  src="/images/bird.png"
                  alt=""
                />
                <h5 onClick={() => bird.pause()}>Birds</h5>
              </button>
            </div>
          </div>
          <div className="flexbox-container">
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => waterfall.play()}
                  src="/images/waves.png"
                  alt=""
                />
                <h5 onClick={() => waterfall.pause()}>Waterstream</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => frog.play()}
                  src="/images/frog.png"
                  alt=""
                />
                <h5 onClick={() => frog.pause()}>Frogs</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => brown.play()}
                  src="/images/noise.png"
                  alt=""
                />
                <h5 onClick={() => brown.pause()}>Brown Noise</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => white.play()}
                  src="/images/noise.png"
                  alt=""
                />
                <h5 onClick={() => white.pause()}>White Noise</h5>
              </button>
            </div>
          </div>
          <div className="flexbox-container">
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => pink.play()}
                  src="/images/noise.png"
                  alt=""
                />
                <h5 onClick={() => pink.pause()}>Pink Noise</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => people.play()}
                  src="/images/prople.png"
                  alt=""
                />
                <h5 onClick={() => people.pause()}>People</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => waterfall.play()}
                  src="/images/waterfall1.png"
                  alt=""
                />
                <h5 onClick={() => waterfall.pause()}>Waterfall</h5>
              </button>
            </div>
            <div className="flexbox-item">
              <button>
                <img
                  onClick={() => ocean.play()}
                  src="/images/ocean.png"
                  alt=""
                />
                <h5 onClick={() => ocean.pause()}>Ocean</h5>
              </button>
            </div>
          </div>
          <h5 className="instructions">
            <ul>
              <li>Click on the image icon to play sound.</li>
              <li>
                Click on the image again to increase intensity of the sound.
              </li>
              <li>Click on the text under the image to pause the sound.</li>
              <li>
                Create diffrent sound effects by using multiple sounds at a
                time.
              </li>
            </ul>
          </h5>
        </body>
        <footer>
          <hr />
          <div className="footer">
            <h5>Copyright: Sarthak Tyagi</h5>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
