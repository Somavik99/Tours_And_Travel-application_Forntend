// import useFetchDataServices from "../Hooks/useFetchAllServiceData";
import "./UserReview.css";
import { BASE_URI } from "../URL/configFile";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { initialReviews } from "./initialRview";
import { IoMdStar } from "react-icons/io";
// import ButtonLoader from "../ButtonLoader/ButtonLoader"; 
import ReviewLoader from "./ReviewLoader/ReviewLoader";

function UserReview({ id, data}) {
  const [reviewState, setReviewState] = useState(initialReviews);
  const [loadingReview,setLoadingReview] = useState(false)

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
    setLoadingReview(true);
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
      setLoadingReview(false);
      setReviewState(initialReviews);
      return await reviewResult;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section className="Review__Container">
      <h1>
        Reviews <span>({data.reviews.length} reviews)</span>
      </h1>
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
            placeholder="Enter your comment...!"
            value={reviewState.comment}
            onChange={onReviewPost}
          />
          <button type="submit" onClick={handleSubmitReviews}>
            {loadingReview === true ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReviewLoader/>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <section style={{ width: "100%" }}>
        <h3>All Reviews</h3>
        <section
          style={{
            border: "1px solid",
            width: "100%",
            height:"600px",
            overflowY: "scroll",
            overflowX: "hidden",
            boxSizing: "border-box",
            borderRadius: "5px",
          }}
          className="AllReviews__container"
        >
          {data.reviews.map((review, index) => {
            return (
              <section
                key={index}
                style={{
                  width: "90%",
                  margin: "60px",
                  height: "50%",
                }}
              >
                <h5>
                  <span
                    style={{
                      margin: "10px",
                      padding: "20px 25px",
                      color: "white",
                      border: "1px solid",
                      borderRadius: "50px",
                      background: "orange",
                    }}
                  >
                    {review.user.name.split("")[0]}
                  </span>
                  {review.user.name}
                  <p style={{ marginLeft: "10%" }}>{review.user.email}</p>
                </h5>
                <section>
                  <p>
                    Rating: {review.rating}
                    <IoMdStar color="orange" />
                  </p>
                  <p>Comment: {review.comment}</p>
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
}

export default UserReview;
