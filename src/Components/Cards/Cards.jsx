import { FaLocationDot } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GiArchiveResearch } from "react-icons/gi";
import "./Cards.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/Context";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../Context/Context";

function Cards({ data }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function onClickRoute(id) {
    navigate(`/getalltours/${id}`);
  }

  useEffect(() => {
    if (!user) {
      navigate("/logIn");
    }
  }, [user, navigate]);

  return (
    <div className="Card__container">
      <img src={data.photo} alt={data.title} />

      <div className="card_details__container">
        <div className="featured">
          {data.featured === true ? "Featured" : null}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <span className="Icon">
            <FaLocationDot color="white" style={{ fontWeight: "800" }} />
          </span>
          <span>{data.city}</span>
        </div>
        <div
          style={{ marginBottom: "20px", fontWeight: "600", margin: "15px 0" }}
        >
          <span className="Icon">
            <GiArchiveResearch color="white" style={{ fontWeight: "800" }} />
          </span>
          <span>
            <Link
              to={data._id}
              className="All__Link"
              style={{
                textDecoration: "none",
                color: "white",
                transition: " all 0.3s  ease",
              }}
            >
              {data.title}
            </Link>
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <span className="Icon">
            <LiaRupeeSignSolid color="white" style={{ fontWeight: "800" }} />
          </span>
          <span>{data.price}/per person</span>
        </div>

        <button onClick={() => onClickRoute(data._id)}>Book Now</button>
      </div>
    </div>
  );
}

export default Cards;
