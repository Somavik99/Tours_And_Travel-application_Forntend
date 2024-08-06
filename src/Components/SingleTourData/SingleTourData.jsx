import { useParams } from "react-router-dom";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import { BASE_URI } from "../URL/configFile";

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
              <section>
                <p>{objectData.city}</p>
                <p>{objectData.price}</p>
                <p>{objectData.distance} k/m</p>
                <p>{objectData.maxGroupSize} people</p>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SingleTourData;
