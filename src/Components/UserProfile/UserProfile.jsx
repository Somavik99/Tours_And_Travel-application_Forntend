// import { BASE_URI } from "../URL/configFile";
import "./userProfile.css";

function UserProfile() {
  // `${BASE_URI}/sendTourLocation`

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
                id="City"
                placeholder="Enter your tour city...!"
              />
            </div>
            <div>
              <label htmlFor="Address">Address: </label>
              <input
                type="text"
                name="address"
                id="Address"
                placeholder="Enter your tour address...!"
              />
            </div>
            <div>
              <label htmlFor="Distance">Distance(km): </label>
              <input
                type="number"
                name="distance"
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
                id="Price"
                placeholder="Enter your tour price...!"
              />
            </div>
            <div>
              <label htmlFor="maxGroupSize">Max People: </label>
              <input
                type="number"
                name="maxGroupSize"
                id="maxGroupSize"
                placeholder="Enter max people...!"
              />
            </div>
            <div>
              <label htmlFor="Image">Image: </label>
              <input
                type="url"
                name="image"
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
                id="YES"
                placeholder="Enter your tour"
              />
              <label htmlFor="YES">Yes</label>
            </div>
            <div className="boolean__val">
              <input
                type="radio"
                name="featured"
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
              name="description"
              id="Description"
              placeholder="Enter your tour"
              style={{resize:"none"}}
            ></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </div>
  );
}

export default UserProfile;
