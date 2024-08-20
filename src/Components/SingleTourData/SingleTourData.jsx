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
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import BookingModal from "./BookingModal/BookingModal";
import UserReview from "../UserReview/UserReview";
// import {  } from "../Context/Context";

function SingleTourData() {
  const [bookingState, setBookingState] = useState({
    fullName: "",
    phoneNumber: "",
    bookingDate: "",
    maximumPeople: 0,
    bookingPrice: 0,
    totalPrice: 0,
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const objectData = apiDataObject.dataArray;
  let bookingPrice = objectData.price * bookingState.maximumPeople;
  let totalPrice = bookingPrice + 100;

  async function handleBookingTour(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setIsOpen(false);
      if (
        bookingState.fullName !== "" &&
        bookingState.phoneNumber !== "" &&
        bookingState.maximumPeople !== 0 &&
        bookingState.bookingDate !== ""
      ) {
        const bearerToken = localStorage.getItem("token");
        const resp = await fetch(
          `${BASE_URI}/tour_booking/tour/${objectData._id}/booking`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${bearerToken}`,
            },
            body: JSON.stringify({
              fullName: bookingState.fullName,
              phoneNumber: bookingState.phoneNumber,
              bookingDate: bookingState.bookingDate,
              maximumPeople: bookingState.maximumPeople,
              bookingPrice: bookingPrice,
              totalPrice: totalPrice,
            }),
          }
        );

        const resultResponse = await resp.json();

        if (!resultResponse.ok) {
          console.error(resultResponse.message);
        }
        setLoading(false);
        setIsOpen(true);
        setBookingState({
          fullName: "",
          phoneNumber: "",
          bookingDate: "",
          maximumPeople: 0,
          bookingPrice: 0,
          totalPrice: 0,
        });
        return await resultResponse;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  // console.log(apiDataObject)

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

              <section >
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
                      name="phoneNumber"
                      value={bookingState.phoneNumber}
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
                        name="maximumPeople"
                        placeholder="Number of people"
                        value={bookingState.maximumPeople}
                        onChange={handleBookingInputChange}
                      />
                    </div>
                  </section>
                  <section>
                    <section className="calculation">
                      <p>
                        {objectData.price} x {bookingState.maxPeople} person
                      </p>
                      <span>{bookingPrice}</span>
                    </section>
                    <section className="calculation">
                      <p>Service charges</p>
                      <span>100</span>
                    </section>
                    <h5 style={{ textAlign: "center" }}>Total: {totalPrice}</h5>
                  </section>
                  <button onClick={handleBookingTour} type="submit">
                    {loading === true ? (
                      <div
                        style={{ display: "flex", justifyContent: "center",alignItems:"center" }}
                      >
                        <ButtonLoader />
                      </div>
                    ) : (
                      "Book Now"
                    )}
                  </button>
                </form>
              </section>
            </div>
          </div>
          {loading === false && isOpen === true ? (
            <BookingModal setIsOpen={() => setIsOpen(false)} />
          ) : (
            <></>
          )}
          <section style={{}}>
            <UserReview
              id={objectData._id}
              data={objectData}
              loading={loading}
              setLoading={setLoading}
            />
          </section>
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
