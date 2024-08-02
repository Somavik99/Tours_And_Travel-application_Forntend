import { CiLocationOn } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import "./Cards.css";

function Cards({ data }) {
  return (
    <div className="Card__container">
      <div className="card_img__container">
        <img src={data.photo} alt={data.title} />
      </div>
      <div className="card_details__container">
        <div>
          <CiLocationOn /> <span>{data.city}</span>
        </div>
        <div>{data.title}</div>
        <div>
          <LiaRupeeSignSolid /> <span>{data.price}/per person</span>
        </div>
        <div>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
