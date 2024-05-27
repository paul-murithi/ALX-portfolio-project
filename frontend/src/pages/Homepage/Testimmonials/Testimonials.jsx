import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import profilePic from "../../../assets/Image.png";

const testimonialsData = [
  {
    profilePic: profilePic,
    comment: "Excellent service and very comfortable ride!",
    name: "John Doe",
    location: "New York, USA",
  },
  {
    profilePic: profilePic,
    comment: "I had a great experience, highly recommend!",
    name: "Jane Smith",
    location: "London, UK",
  },
  {
    profilePic: profilePic,
    comment: "Professional staff and clean buses.",
    name: "Samuel Lee",
    location: "Sydney, Australia",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-left">
        <h2>Testimonials</h2>
        <h4>What people say about us</h4>
        <div className="carousel-indicators">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`circle ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleCircleClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="testimonials-right">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img
              src={testimonial.profilePic}
              alt={testimonial.name}
              className="profile-pic"
            />
            <p className="comment">"{testimonial.comment}"</p>
            <p className="name">{testimonial.name}</p>
            <p className="location">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
