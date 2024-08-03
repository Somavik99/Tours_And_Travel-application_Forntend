import Search from "../Search/Search";
import weatherIcon from "../../assets/weather.png";
import tourGuideIcon from "../../assets/guide.png";
import customizationIcon from "../../assets/customization.png";
import "./Main.css";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import { BASE_URI } from "../URL/configFile";
import Cards from "../Cards/Cards";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Loader from "../Loader/Loader";
import { MainStyles } from "../../InlineStyles/InlineStyles";

function Main() {
  const { apiDataObject } = useFetchDataServices(
    `${BASE_URI}/tours/getAllToursData?limit=10&skip=0`
  );

  if (!Array.isArray(apiDataObject.dataArray)) {
    return null;
  }

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
            <h3>Calculate weather</h3>
            <p style={{ color: "gray" }}>
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
            <h3>Best tour guide</h3>
            <p style={{ color: "gray" }}>
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
            <h3>Customization</h3>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              illo ad facere assumenda, dignissimos amet quae expedita nisi.
              Molestias, doloribus.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "8%",
          marginLeft: "2%",
          width: "550px",
          position: "relative",
        }}
      >
        <span className="Explore">Explore All</span>

        <MdOutlineKeyboardArrowRight size={30} className="Explore__icon" />

        <h1>Our Featured Tours</h1>
      </div>

      {/* Card Container */}

      {apiDataObject.Error === null && apiDataObject.Loading === false ? (
        <div className="Cards__cont">
          {apiDataObject.dataArray?.map((data, index) => {
            return (
              <div key={index}>
                <Cards data={data} />
              </div>
            );
          })}
        </div>
      ) : (
        <div style={MainStyles.Loader}>
          <Loader />
        </div>
      )}
    </>
  );
}

export default Main;
