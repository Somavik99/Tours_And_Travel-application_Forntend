import tourImage from "../../assets/tour.jpg";
import Cards from "../Cards/Cards";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
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
      <div style={{marginTop:"5%"}}>
        <Search />
      </div>
      <div className="Tours__Cards">
        {apiDataObject.dataArray.length > 0
          ? apiDataObject.dataArray?.map((data, index) => {
              return <Cards data={data} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}

export default ToursPage;
