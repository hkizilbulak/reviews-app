import React, { useState } from "react";
import data from "./data";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";

export const Review = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index > data.length - 1) {
      return 0;
    }
    if (index < 0) {
      return data.length - 1;
    }
    return index;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setIndex(checkIndex(randomNumber));
  };

  const { name, image, job, text } = data[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaAngleLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaAngleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  );
};
