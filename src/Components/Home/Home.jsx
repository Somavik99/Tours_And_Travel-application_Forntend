import NavBar from "../Navbar/NavBar";
import worldPng from "../../assets/world.png";
import HeroImage1 from "../../assets/hero-img01.jpg";
import HeroVideo from "../../assets/hero-video.mp4";
import HeroImage2 from "../../assets/hero-img02.jpg";
import "./Home.css";
import Main from "../Main/Main";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Hero__container">
        <div>
          <p>
            <span
              style={{
                background: "orange",
                padding: "5px 15px",
                borderRadius: "30px",
                fontSize: "14px",
                fontFamily: "Playwrite BE WAL ",
                fontStyle: "italic",
              }}
            >
              Know Before You Go
            </span>
            <img src={worldPng} alt="world" style={{ width: "40px" }} />
          </p>
          <h1 style={{ width: "600px", fontSize: "55px" }}>
            Traveling opens the doors to creating
            <span style={{ color: "orange" }}> memories</span>
          </h1>
          <p
            style={{
              width: "500px",
              fontSize: "20px",
              fontWeight: "400",
              color: "gray",
            }}
          >
            Tours and travels offer an enriching way to explore the world,
            providing unique experiences and unforgettable memories. From exotic
            beaches to historical landmarks, each destination has its own charm
            and story. Travel agencies and tour operators simplify the journey,
            arranging accommodations, transportation, and guided tours. Group
            tours provide social opportunities, while solo travel allows for
            personal exploration.
          </p>
        </div>
        <div className="HeroImage__container">
          <img src={HeroImage1} alt="heroImage" className="Hero__image1" />
          <video controls className="video">
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <img src={HeroImage2} alt="HeroImage" className="Hero__image2" />
        </div>
      </div>
      <div className="Main__container">
        <Main />
      </div>
    </>
  );
}

export default Home;
