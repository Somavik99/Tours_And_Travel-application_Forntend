// import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import "./UserReview.css";
import { BASE_URI } from "../URL/configFile";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { initialReviews } from "./initialRview";

function UserReview({ id }) {
  const [reviewState, setReviewState] = useState(initialReviews);

  function handleReviewRating(rating) {
    setReviewState((prev) => {
      return {
        ...prev,
        rating: rating,
      };
    });

    console.log(rating);
  }

  function onReviewPost(e) {
    const { name, value } = e.target;
    setReviewState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  //  `${BASE_URI}/review/tours/${id}/reviews`

  async function handleSubmitReviews(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URI}/review/tours/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating: reviewState.rating,
          comment: reviewState.comment,
        }),
      });

      const reviewResult = await response.json();
      if (!reviewResult.ok) {
        console.log(reviewResult.message);
      }
      setReviewState(initialReviews);
      return await reviewResult;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section>
      <form>
        <div>
          <Rating
            value={reviewState.rating}
            allowFraction={true}
            transition={true}
            // iconsCount={5}
            onClick={handleReviewRating}
            initialValue={reviewState.rating}
          />
        </div>
        <div>
          <input
            type="text"
            name="comment"
            value={reviewState.comment}
            onChange={onReviewPost}
          />
          <button type="submit" onClick={handleSubmitReviews}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserReview;
