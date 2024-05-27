import React from "react";
import Image from "../../../Common/Image/Image";
import mapImage from "../../../assets/map 1.svg";
import ticketBooking from "../../../assets/Group 7.svg";
import travelManagement from "../../../assets/Group 48.svg";
import busImage from "../../../assets/Group 11.svg";
import "./Features.css";

const FeaturesElement = ({ heading, details, src }) => {
  return (
    <>
      <div className="services">
        <Image src={src} alt={"route network"} />
        <h3>{heading}</h3>
        <p>{details}</p>
      </div>
    </>
  );
};

const Features = () => {
  return (
    <>
      <div className="category-services-headers">
        <h2>We Offer Best Services</h2>
      </div>
      <div className="category-services">
        <FeaturesElement
          heading={"Comprehensive Bus Route Network"}
          details="Our extensive bus route network ensures connectivity to various
            destinations, providing you with a wide range of travel options and
            seamless journeys."
          src={mapImage}
        />
        <FeaturesElement
          heading={"Seamless Ticket Booking"}
          details="Experience hassle-free travel with our seamless ticket booking
        system. Effortlessly reserve your seats and enjoy a smooth,
        efficient process from start to finish."
          src={ticketBooking}
        />
        <FeaturesElement
          heading={"Convenient Travel Management"}
          details=" Simplify your travel experience with our convenient management
            tools. Easily track and manage your trips, ensuring a stress-free
            and organized journey every time."
          src={travelManagement}
        />
        <FeaturesElement
          heading={"Choose from your favourite buses"}
          details="Tailor your journey to your preferences by choosing from a diverse
            selection of buses. Enjoy comfort, reliability, and personalized
            travel options with our extensive fleet."
          src={busImage}
        />
      </div>
    </>
  );
};
export default Features;
