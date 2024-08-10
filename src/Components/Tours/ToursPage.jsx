import tourImage from "../../assets/tour.jpg";
import Cards from "../Cards/Cards";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import Loader from "../Loader/Loader";
import Search from "../Search/Search";
import { BASE_URI } from "../URL/configFile";
import "./toursPage.css";

function ToursPage() {
  const { apiDataObject } = useFetchDataServices(
    `${BASE_URI}/tours/getAllToursData`
  );

  return (
    <div className="Tours__container">
      <div className="Tours__header-image">
        <div>
          <h1>ALL TOURS</h1>
        </div>
        <img src={tourImage} alt="tourImage" />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Search />
      </div>
      {apiDataObject.dataArray.length !== 0 ? (
        <div className="Tours__card__cont">
          <div className="Tours__Cards">
            {apiDataObject.dataArray?.map((data, index) => {
              return <Cards data={data} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
            flexDirection: "column",
          }}
        >
          <Loader />
          <h1>Loading...!</h1>
        </section>
      )}
    </div>
  );
}

export default ToursPage;
