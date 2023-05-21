import { Button } from "@mui/material";
import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__content">
        <h1>
          Package
          <span>Design</span>
        </h1>
        <p>
          Are you looking to get hired in the comfort of your own house. Or
          maybe you are looking for that one skilled personnel to get your
          problems fixed. We got you covered
        </p>
        <Button className="loginBtn" variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Slider;
