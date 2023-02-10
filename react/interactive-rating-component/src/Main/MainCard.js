import { useState } from "react";
import "../cssFiles/mainScss.scss";
import { ReactComponent as Star } from "../icons/icon-star.svg";
import { ReactComponent as Phone } from "../icons/illustration-thank-you.svg";

function MainCard() {
  const [rating, setRating] = useState();
  const [mainView, setMainView] = useState(false);
  const ratingButtons = [1, 2, 3, 4, 5];

  const handleSubmit = (rating) => {
    // rating.preventDefault();
    setMainView((wasOpened) => !wasOpened);
    console.log(rating);
  };

  return mainView ? (
    <div style={{ color: "white" }}>
      <div className="mainCard">
        <Phone />
        <div className="barResult">You selected {rating} out of 5</div>
        <div className="mainText thankYouText">
          <div className="header">
            <h1>Thank you!</h1>
          </div>
          <div className="someWords">
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="mainCard">
        <div className="topBar">
          <div className="buttonStar">
            <Star id="star" />
          </div>
        </div>
        <div className="mainText">
          <div className="header">
            <h1>How did we do? </h1>
          </div>
          <div className="someWords">
            <p>
              {" "}
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!{" "}
            </p>
          </div>
        </div>
        <div className="ratingButtons">
          {ratingButtons.map((number) => (
            <button
              className="button"
              key={number}
              onClick={() => setRating(number)}
            >
              <h2>{number}</h2>
            </button>
          ))}
        </div>
        <button className="submitButton" onClick={() => handleSubmit(rating)}>
          <h2>SUBMIT</h2>
        </button>
      </div>
    </>
  );
}

export default MainCard;
