import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import "./Search.css";
import { searchStyles } from "../../InlineStyles/InlineStyles";
import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import { BASE_URI } from "../URL/configFile";
import { useState } from "react";
import Modal from "./Modal/Modal";

function Search() {
  const [searchInput, setSearchInput] = useState({
    Location: "",
    Distance: "",
    maxPeople: "",
  });

  const [filteredData, setFilteredData] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { apiDataObject } = useFetchDataServices(
    `${BASE_URI}/tours/getAllToursData`
  );

  function handleInputChange(e) {
    const { name, value } = e.target;

    setSearchInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClickSearch() {
    let filteringData = apiDataObject.dataArray;
    try {
      const filterData = filteringData.filter((data) => {
        const searchLocation = searchInput.Location.toLowerCase();
        const searchData = {
          address: data.address.toLowerCase(),
          city: data.city.toLowerCase(),
          title: data.title.toLowerCase(),
          distance: data.distance,
          maxGroupSize: data.maxGroupSize,
        };

        return searchData.address.includes(searchLocation) ||
          searchData.title.includes(searchLocation) ||
          searchData.city.includes(searchLocation) ||
          searchData.distance.toString() === searchInput.Distance ||
          searchData.maxGroupSize.toString() === searchInput.maxPeople
          ? data
          : null;
      });

      if (
        searchInput.Location !== "" &&
        searchInput.Distance !== "" &&
        searchInput.maxPeople !== ""
      ) {
        // console.log(filterData);
        setModalIsOpen(true);
        return setFilteredData(filterData);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="search__container d-flex justify-content-center align-items-center ">
        <p>
          <p>
            <CiLocationOn color="red" size={19} />
            <span style={searchStyles.iconSpanStyle}>Location</span>
          </p>
          <input
            type="text"
            name="Location"
            value={searchInput.Location}
            onChange={(e) => handleInputChange(e)}
            //   className="p-3"
            placeholder="where are you going?"
            style={searchStyles.inputStyle}
          />
        </p>
        <p>
          <p>
            <GiPathDistance color="red" size={19} />
            <span style={searchStyles.iconSpanStyle}>Distance</span>
          </p>
          <input
            type="number"
            name="Distance"
            value={searchInput.Distance}
            //   className="p-3"
            placeholder="Distance (in km)"
            style={searchStyles.inputStyle}
            onChange={(e) => handleInputChange(e)}
          />
        </p>
        <p>
          <p>
            <GoPeople color="red" size={19} />{" "}
            <span style={searchStyles.iconSpanStyle}>Max People</span>
          </p>
          <input
            type="number"
            value={searchInput.maxPeople}
            //   className="p-3"
            name="maxPeople"
            placeholder="0"
            style={searchStyles.inputStyle}
            onChange={(e) => handleInputChange(e)}
          />
        </p>
        <div>
          <button className="mt-3 p-1" onClick={() => handleClickSearch()}>
            <IoIosSearch size={35} className="m-2 " />
          </button>
        </div>
      </div>
      {modalIsOpen === true ? (
        <Modal
          searchedData={filteredData}
          setModalIsOpen={() => setModalIsOpen(false)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Search;
