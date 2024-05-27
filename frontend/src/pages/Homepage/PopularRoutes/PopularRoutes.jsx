import React from "react";
import Image from "../../../Common/Image/Image";
import rectangle14 from "../../../assets/Rectangle 14.png";
import rectangle15 from "../../../assets/Rectangle 14.jpg";
import rectangle16 from "../../../assets/Rectangle 14 (1).png";
import navIcon from "../../../assets/navigation 1.svg";
import "./PopularRoutes.css";

const RoutesElements = ({
  destinationName,
  amountSaved,
  duration,
  src,
  icon,
}) => {
  return (
    <div className="destination-1 destination">
      <Image src={src} alt={src} />
      <span className="destination-name">
        <p>{destinationName}</p>
        <p>{amountSaved}</p>
      </span>
      <div className="navigation">
        <Image src={icon} alt={icon} />
        <p>{duration}</p>
      </div>
    </div>
  );
};
const PopularRoutes = () => {
  return (
    <>
      <div className="category-services-headers">
        <h2>TOP DESTINATIONS</h2>
      </div>
      <div className="top-destinations">
        <RoutesElements
          destinationName={"Nairobi"}
          src={rectangle14}
          amountSaved={"20%"}
          icon={navIcon}
          duration={"10-day trip"}
        />
        <RoutesElements
          destinationName={"Mombasa"}
          src={rectangle15}
          amountSaved={"15%"}
          icon={navIcon}
          duration={"10-day trip"}
        />
        <RoutesElements
          destinationName={"Kisumu"}
          src={rectangle16}
          amountSaved={"15%"}
          icon={navIcon}
          duration={"14-day trip"}
        />
      </div>
    </>
  );
};
export default PopularRoutes;
