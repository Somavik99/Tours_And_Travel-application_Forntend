import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import "./Search.css";
import { searchStyles } from "../../InlineStyles/InlineStyles";

function Search() {
  return (
    <div className="search__container d-flex justify-content-center align-items-center ">
      <p>
        <p>
          <CiLocationOn color="red" size={19} />
          {" "}<span style={searchStyles.iconSpanStyle}>Location</span>
        </p>
        <input
          type="text"
        //   className="p-3"
          placeholder="where are you going?"
          style={searchStyles.inputStyle}
        />
      </p>
      <p>
        <p>
          <GiPathDistance color="red" size={19} />{" "}
          <span style={searchStyles.iconSpanStyle}>Distance</span>
        </p>
        <input
          type="number"
        //   className="p-3"
          placeholder="Distance (in km)"
          style={searchStyles.inputStyle}
        />
      </p>
      <p>
        <p>
          <GoPeople color="red" size={19} />{" "}
          <span style={searchStyles.iconSpanStyle}>Max People</span>
        </p>
        <input
          type="number"
        //   className="p-3"
          placeholder="0"
          style={searchStyles.inputStyle}
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
