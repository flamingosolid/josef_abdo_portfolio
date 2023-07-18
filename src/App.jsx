import { useState } from "react";
import "./App.scss";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav>
        <h1>This is a Logo</h1>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

import FadeInSection from "./FadeIn";
import BullsAndCows from "./components/BullsAndCows";
import Quiz from "./components/Quiz";
function Main() {
  const [story] = useState([
    {
      id: 1,
      title: "From Uppsala to Copenhagen: A Leap of Love!",
      img: null,
      imgAlt: null,
      text: "Hello everyone! I'm Josef, the self-proclaimed coding adventurer. Today, I'm here to share my story of how I went from being a leisure leader in Uppsala to a junior frontend developer in Copenhagen. So, fasten your seatbelts and get ready for a fun journey!",
    },
    {
      id: 2,
      title: "The Move: Scandinavia Bound!",
      img: null,
      imgAlt: null,
      text: "Before diving into the coding world, I had the pleasure of working as a leisure leader in Uppsala. Picture this: a bunch of energetic kids between 11 and 18 years old, looking up to me for fun and excitement. I guess you can say I was their superhero! (with a cape made of infinite patience and endless enthusiasm).",
    },
    {
      id: 3,
      title: "Uppsala's Heroic Leisure Leader!",
      img: null,
      imgAlt: null,
      text: "But life had different plans for me. I decided to move to Copenhagen with my lovely wife (who's also my partner in crime). We were ready for a new adventure, filled with Danish pastries and Lego building blocks! Plus, who can resist the charm of the Little Mermaid?",
    },
    {
      id: 4,
      title: "Embracing the Code: My Journey Begins!",
      img: null,
      imgAlt: null,
      text: "Once settled in Copenhagen, I knew it was time for a career change. I stumbled upon the Academic Work's JavaScript program, which promised accelerated learning. Without thinking twice (well, maybe a little bit of thinking), I applied and got accepted!",
    },
    {
      id: 5,
      title: "Coding: A Language of Its Own!",
      img: null,
      imgAlt: null,
      text: "Learning to code felt like entering a whole new world—a world where semicolons were more than just punctuation and curly braces became my best friends. JavaScript became my language of choice, and frontend development was my newfound passion.",
    },
    {
      id: 6,
      title: "Chasing Bugs, Crafting Designs!",
      img: null,
      imgAlt: null,
      text: "As a junior frontend developer, I'm always up for the challenge of chasing pesky bugs and crafting pixel-perfect designs. Whether it's debugging or styling, I'm there, armed with my trusty editor and an energy drink.",
    },
    {
      id: 7,
      title: "The Future: Where Will Josef Go Next?",
      img: null,
      imgAlt: null,
      text: "As I continue my coding journey, the possibilities are endless! Who knows where this adventure will take me next? Maybe I'll conquer the world of full-stack development or create the next big thing in web design. Whatever it is, I'll be sure to keep you all updated!",
    },
    {
      id: 8,
      title: "Thank You for Joining My Adventure!",
      img: null,
      imgAlt: null,
      text: "And that, kind reader, brings us to the end of my short and (hopefully) funny presentation. I hope you enjoyed getting to know me, Josef, the adventurous coder from Uppsala turned Copenhagen enthusiast. If you want to join me on this crazy coding ride, just send me an email!",
    },

    {
      id: 9,
      title: "The End",
      img: null,
      imgAlt: null,
      text: "Thank you, and let's keep coding with a smile!",
    },
  ]);
  return (
    <>
      <section id="home" className="first__page">
        <div className="content">
          <h1>Josef Abdo</h1>
          <span>
            is my name! <br /> Creating websites is my game.
          </span>
        </div>
      </section>
      <section id="about" className="about__page">
        <div className="content__container">
          <div className="content__presentation">
            <h1>Meet Josef: The Adventurous Coder!</h1>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="./Josef_profil.jpg"
                    alt="profile picture of Josef"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Skills</h1>
                  <div className="card">
                    <p>
                      <span>Javascript</span>
                    </p>
                    <p>
                      <span>Browser API</span>
                    </p>
                    <p>
                      <span>REACT</span>
                    </p>
                    <p>
                      <span>Node.js</span>
                    </p>
                    <p>
                      <span>Express</span>
                    </p>
                    <p>
                      <span>GIT</span>
                    </p>
                    <p>
                      <span>Figma</span>
                    </p>
                  </div>
                  <div className="card">
                    <p>
                      <span>HTML</span>
                    </p>
                    <p>
                      <span>DevOps</span>
                    </p>
                    <p>
                      <span>Design Processes</span>
                    </p>
                    <p>
                      <span>UX/UI</span>
                    </p>
                    <p>
                      <span>Next.js</span>
                    </p>
                    <p>
                      <span>CSS</span>
                    </p>
                    <p>
                      <span>Sass</span>
                    </p>
                  </div>
                  <div className="card">
                    <p>
                      <span>Agile Project</span>
                    </p>
                    <p>
                      <span>Methodology</span>
                    </p>
                    <p>
                      <span>Mongo DB</span>
                    </p>
                    <p>
                      <span>Databases/MySql</span>
                    </p>
                    <p>
                      <span>RESTful Web Services</span>
                    </p>
                    <p>
                      <span>Responsive Webdesign</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {story.map((content, index) => {
            return (
              <FadeInSection key={index}>
                <div className="content__presentation">
                  <h1>{content.title}</h1>
                  <p>{content.text}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </section>
      <section id="portfolio" className="portfolio__page">
        <div className="content__portfolio">
          <div className="bullsAndCows game">
            <BullsAndCows />
          </div>
          <div className="Quiz game">
            <Quiz />
          </div>
          <div className="fake_coffee">
            <a
              href="https://fake-coffee-api.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./fake-coffee.png"
                alt="picture of the api website fake coffee api"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <h1>Website still in progress</h1>
      </footer>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
