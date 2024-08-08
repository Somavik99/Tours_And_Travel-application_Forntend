import { useParams } from "react-router-dom";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLocationOutline, IoPeopleSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GiPathDistance } from "react-icons/gi";
import { BASE_URI } from "../URL/configFile";
import Loader from "../Loader/Loader";
import "./SingleTour.css";
import { useState } from "react";

function SingleTourData() {
  const [bookingState, setBookingState] = useState({
    fullName: "",
    phone: "",
    bookingDate: Date,
    maxPeople: 0,
    bookingPrice: 0,
    totalPrice: 0,
  });

  const { id } = useParams();

  const { apiDataObject } = useFetchDataServices(
    `${BASE_URI}/tours/singleTourData/${id}`
  );

  function handleBookingInputChange(e) {
    const { name, value } = e.target;
    setBookingState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

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

              {/* Form for booking tours */}

              <section>
                <h4>Information</h4>
                <form>
                  <section className="form__input">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full-name"
                      value={bookingState.fullName}
                      onChange={handleBookingInputChange}
                    />
                    <input
                      type="number"
                      name="phone"
                      value={bookingState.phone}
                      placeholder="Phone-number"
                      onChange={handleBookingInputChange}
                    />
                    <div>
                      <input
                        type="date"
                        name="bookingDate"
                        value={bookingState.bookingDate}
                        onChange={handleBookingInputChange}
                      />
                      <input
                        type="number"
                        name="maxPeople"
                        placeholder="Number of people"
                        value={bookingState.maxPeople}
                        onChange={handleBookingInputChange}
                      />
                    </div>
                  </section>
                  <section>
                    <section className="calculation">
                      <p>
                        {objectData.price} x {bookingState.maxPeople} person
                      </p>
                      <span>{bookingState.bookingPrice}</span>
                    </section>
                    <section className="calculation">
                      <p>Service charges</p>
                      <span>10</span>
                    </section>
                    <h5 style={{ textAlign: "center" }}>
                      Total: {bookingState.totalPrice}
                    </h5>
                  </section>
                  <button type="submit">Book Now</button>
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
