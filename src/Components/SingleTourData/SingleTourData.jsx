import { useParams } from "react-router-dom";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLocationOutline, IoPeopleSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GiPathDistance } from "react-icons/gi";
import { BASE_URI } from "../URL/configFile";
import Loader from "../Loader/Loader";
import "./SingleTour.css";

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
          <div className="single__tour__cont">
            <div className="About__container">
              <img src={objectData.photo} alt={objectData.title} />
              <div className="Data">
                <h1>{objectData.title}</h1>
                <div>
                  <FaMapLocationDot size={25} color="orange" />
                  {objectData.address}
                </div>
                <section className="Details__sec">
                  <p>
                    <IoLocationOutline size={25} color="orange" />
                    {objectData.city}
                  </p>
                  <p>
                    <LiaRupeeSignSolid size={25} color="orange" />
                    {objectData.price}
                  </p>
                  <p>
                    <GiPathDistance size={25} color="orange" />
                    {objectData.distance} k/m
                  </p>
                  <p>
                    <IoPeopleSharp size={25} color="orange" />
                    {objectData.maxGroupSize} people
                  </p>
                </section>
                <h5>Description</h5>
                <p>{objectData.description}</p>
              </div>
            </div>
            <div className="Booking__container">
              <h3>
                {objectData.price}
                <span style={{ color: "gray", fontSize: "20px" }}>
                  /Per person
                </span>
              </h3>
              <section>
                <h4>Information</h4>
                <form>
                  <section className="form__input">
                    <input type="text" placeholder="Full-name" />
                    <input type="number" placeholder="Phone-number" />
                    <div>
                      <input type="date" />
                      <input type="number" placeholder="Number of people" />
                    </div>
                  </section> 
                  <section>
                    <section className="calculation">
                      <p>{objectData.price} x 1 person</p>
                      <span>{objectData.price}</span>
                    </section>
                    <section className="calculation">
                      <p>Service charges</p>
                      <span>10</span>
                    </section>
                    <h5 style={{ textAlign: "center" }}>Total: </h5>
                  </section>
                  <button>Book Now</button>
                </form>
              </section>
            </div>
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
