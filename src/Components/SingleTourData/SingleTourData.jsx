import { useParams } from "react-router-dom";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import { BASE_URI } from "../URL/configFile";
import Loader from "../Loader/Loader";

function SingleTourData() {
  const { id } = useParams();
  const { apiDataObject } = useFetchDataServices(
    `${BASE_URI}/tours/singleTourData/${id}`
  );

  // console.log(apiDataObject.dataArray)

  const objectData = apiDataObject.dataArray;

  return (
    <div>
      {apiDataObject.dataArray.length !== 0 ? (
        <div>
          <div>
            <img src={objectData.photo} alt={objectData.title} />
            <div>
              <h1>{objectData.title}</h1>
              <div>{objectData.address}</div>
              <section>
                <p>{objectData.city}</p>
                <p>{objectData.price}</p>
                <p>{objectData.distance} k/m</p>
                <p>{objectData.maxGroupSize} people</p>
                <p>{objectData.description}</p>
              </section>
            </div>
          </div>
          <div>
            <h3>
              {objectData.price}
              <span>/person</span>
            </h3>
            <section>
              <form>
                <input type="text" />
                <input type="text" />
                <div>
                  <input type="date" />
                  <input type="text" />
                </div>
              </form>
            </section>
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
            textAlign: "center",
          }}
        >
          <Loader />
          <h1>Loading...!</h1>
        </section>
      )}
    </div>
  );
}

export default SingleTourData;
