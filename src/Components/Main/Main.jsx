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
import experienceImg from "../../assets/experience.png";

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
            style={MainStyles.Serve}
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
      <div style={MainStyles.Explore}>
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
      <section className="Main__experience">
        <section className="Experience__details">
          <div>Experience</div>
          <h1>With all our experience we will serve you</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            molestiae perferendis. Deserunt possimus nisi quod deleniti
            exercitationem.
          </p>
          <div className="exp__data">
            <section >
              <h3>12k+</h3>
              <p>Successful Trips</p>
            </section>
            <section>
              <h3>2k+</h3>
              <p>Regular Clients</p>
            </section>
            <section>
              <h3>15</h3>
              <p>Years of experience</p>
            </section>
          </div>
        </section>
        <img src={experienceImg} alt="experience" className="exp__image" />
      </section>
    </>
  );
}

export default Main;
