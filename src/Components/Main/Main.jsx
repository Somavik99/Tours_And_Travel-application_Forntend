import Search from "../Search/Search";
import weatherIcon from "../../assets/weather.png";
import tourGuideIcon from "../../assets/guide.png";
import customizationIcon from "../../assets/customization.png";
import "./Main.css";

function Main() {
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="Main__body">
        <div>
          <p
            style={{
              fontSize: "15px",
              fontStyle: "italic",
              color: "red",
              fontFamily: "Playwrite BE WAL ",
            }}
          >
            What we serve
          </p>
          <h1>We offer our best services</h1>
        </div>
        <div className="Main__bodyCard">
          <div>
            <p className="img__container">
              <img src={weatherIcon} alt="weather" />
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              illo ad facere assumenda, dignissimos amet quae expedita nisi.
              Molestias, doloribus.
            </p>
          </div>
        </div>
        <div className="Main__bodyCard">
          <div>
            <p className="img__container">
              <img src={tourGuideIcon} alt="tourGuide" />
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              illo ad facere assumenda, dignissimos amet quae expedita nisi.
              Molestias, doloribus.
            </p>
          </div>
        </div>
        <div className="Main__bodyCard">
          <div>
            <p className="img__container">
              <img src={customizationIcon} alt="customization" />
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              illo ad facere assumenda, dignissimos amet quae expedita nisi.
              Molestias, doloribus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
