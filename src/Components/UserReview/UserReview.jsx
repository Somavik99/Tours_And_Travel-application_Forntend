// import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import "./UserReview.css";
import { BASE_URI } from "../URL/configFile";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { initialReviews } from "./initialRview";

function UserReview({ id }) {
  const [reviewState, setReviewState] = useState(initialReviews);


  // `${BASE_URI}/review/tours/${id}/reviews`

  return (
    <section>
      <form>
        <div>
          <Rating allowFraction="true" transition="true" iconsCount={5} />
        </div>
        <div>
          <input type="text" name="comment" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default UserReview;
