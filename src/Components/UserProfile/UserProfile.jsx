import { useState } from "react";
import "./userProfile.css";
import { BASE_URI } from "../URL/configFile";
import Loader from "../Loader/Loader";

function UserProfile() {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [newTourData, setNewTourData] = useState({
    title: "",
    city: "",
    address: "",
    distance: 0,
    price: 0,
    maxGroupSize: 0,
    photo: "",
    featured: undefined,
    description: "",
  });

  function handleNewTourSubmitChange(e) {
    const { name, value } = e.target;

    setNewTourData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  // `${BASE_URI}/tours/sendTourLocation`

  async function submitNewTourData(e) {
    e.preventDefault();
    setSubmitLoading(false);

    try {
      const BearerToken = localStorage.getItem("token");

      if (!BearerToken) {
        throw new Error("No token found in the LocalStorage");
      }

      const responseResult = await fetch(`${BASE_URI}/tours/sendTourLocation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BearerToken}`,
        },
        body: JSON.stringify({
          title: newTourData.title,
          city: newTourData.city,
          address: newTourData.address,
          distance: newTourData.distance,
          price: newTourData.price,
          maxGroupSize: newTourData.maxGroupSize,
          photo: newTourData.photo,
          featured: newTourData.featured === "yes" ? true : false,
          description: newTourData.description,
        }),
      });
      await handleTokenExpiration(responseResult);
      const responseData = await responseResult.json();

      if (!responseData.ok) {
        console.log(responseData.message);
      }
      setSubmitLoading(true);
      return await responseData;
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmitLoading(false);
      setNewTourData({
        title: "",
        city: "",
        address: "",
        distance: 0,
        price: 0,
        maxGroupSize: 0,
        photo: "",
        featured: undefined,
        description: "",
      });
    }
  }

  async function handleTokenExpiration(result) {
    try {
      if (result.status === 401 || result.status === 403) {
        console.log(
          "Token either invalid or expired. Redirecting to login...!"
        );
        localStorage.removeItem("token");
        window.location.href = "/logIn";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>User Profile</h1>

      <section className="Form__main__cont">
        <h5>Post your tour location</h5>
        <form className="Form__cont">
          <div>
            <label htmlFor="Title">Title: </label>
            <input
              type="text"
              name="title"
              value={newTourData.title}
              onChange={handleNewTourSubmitChange}
              id="Title"
              placeholder="Enter your tour title..."
            />
          </div>
          <section>
            <div>
              <label htmlFor="City">City: </label>
              <input
                type="text"
                name="city"
                value={newTourData.city}
                onChange={handleNewTourSubmitChange}
                id="City"
                placeholder="Enter your tour city...!"
              />
            </div>
            <div>
              <label htmlFor="Address">Address: </label>
              <input
                type="text"
                name="address"
                value={newTourData.address}
                onChange={handleNewTourSubmitChange}
                id="Address"
                placeholder="Enter your tour address...!"
              />
            </div>
            <div>
              <label htmlFor="Distance">Distance(km): </label>
              <input
                type="number"
                name="distance"
                value={newTourData.distance}
                onChange={handleNewTourSubmitChange}
                id="Distance"
                placeholder="Enter your tour distance...!"
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="Price">Price: </label>
              <input
                type="number"
                name="price"
                value={newTourData.price}
                onChange={handleNewTourSubmitChange}
                id="Price"
                placeholder="Enter your tour price...!"
              />
            </div>
            <div>
              <label htmlFor="maxGroupSize">Max People: </label>
              <input
                type="number"
                name="maxGroupSize"
                value={newTourData.maxGroupSize}
                onChange={handleNewTourSubmitChange}
                id="maxGroupSize"
                placeholder="Enter max people...!"
              />
            </div>
            <div>
              <label htmlFor="Image">Image: </label>
              <input
                type="url"
                name="photo"
                value={newTourData.photo}
                onChange={handleNewTourSubmitChange}
                id="Image"
                placeholder="Enter your tour image URL...!"
              />
            </div>
          </section>
          <div className="featured__cont">
            <label htmlFor="Featured">Featured</label>
            <div className="boolean__val">
              <input
                type="radio"
                name="featured"
                value={newTourData.featured}
                onChange={handleNewTourSubmitChange}
                id="YES"
                placeholder="Enter your tour"
              />
              <label htmlFor="YES">Yes</label>
            </div>
            <div className="boolean__val">
              <input
                type="radio"
                name="featured"
                value={newTourData.featured}
                onChange={handleNewTourSubmitChange}
                id="NO"
                placeholder="Enter your tour"
              />
              <label htmlFor="NO">No</label>
            </div>
          </div>
          <div>
            <label htmlFor="Description">Description</label>
            <textarea
              type=""
              rows={6}
              cols={100}
              name="description"
              value={newTourData.description}
              onChange={handleNewTourSubmitChange}
              id="Description"
              placeholder="Enter your tour description...!"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button type="submit" onClick={submitNewTourData}>
            {submitLoading === false ? (
              "SUBMIT"
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Loader />
              </div>
            )}
          </button>
        </form>
      </section>
    </div>
  );
}

export default UserProfile;
