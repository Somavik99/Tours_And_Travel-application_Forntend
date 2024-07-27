import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import "./Search.css";
import { inputStyle } from "../../InlineStyles/InlineStyles";

function Search() {
  return (
    <div className="search__container d-flex justify-content-center align-items-center ">
      <p>
        <p>
          <CiLocationOn color="red" size={19} />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>Location</span>
        </p>
        <input
          type="text"
          className="p-3"
          placeholder="where are you going?"
          style={inputStyle}
        />
      </p>
      <p>
        <p>
          <GiPathDistance color="red" size={19} />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>Distance</span>
        </p>
        <input
          type="number"
          className="p-3"
          placeholder="Distance (in km)"
          style={inputStyle}
        />
      </p>
      <p>
        <p>
          <GoPeople color="red" size={19} />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Max People
          </span>
        </p>
        <input
          type="number"
          className="p-3"
          placeholder="0"
          style={inputStyle}
        />
      </p>
      <div>
        <button className="mt-3 p-1">
          <IoIosSearch size={35} className="m-2 " />
        </button>
      </div>
    </div>
  );
}

export default Search;
