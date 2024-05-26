import React, { useState } from "react";
import "./Hero.css";
import travellerImage from "../../../assets/Traveller 1.png";

const Hero = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.departure) errors.departure = "Departure is required";
    if (!data.destination) errors.destination = "Destination is required";
    if (!data.date) errors.date = "Invalid date";
    console.log(errors);
    return errors;
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${travellerImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-headline">Welcome to Our Bus Booking Service</h1>
        <p className="hero-subheadline">Your journey begins here</p>
        <form className="hero-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Departure Location"
            name="departure"
            onChange={handleChange}
            value={formData.departure}
            required
          />
          <input
            type="text"
            placeholder="Destination"
            name="destination"
            onChange={handleChange}
            value={formData.destination}
            required
          />
          <input
            type="date"
            placeholder="Date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
