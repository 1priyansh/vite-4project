import React from "react";
import Ban from "../assets/ban.jpg";

const Banner = () => {
  return (
    <div>
      <img
        className="banner-1"
        src={Ban}
        alt="banner"
        style={{ width: "100%", height: "300px" }}
      />
    </div>
  );
};
export default Banner;
