import Carousel from "react-bootstrap/Carousel";
import bgChoc from "../assets/images/BgChoc.jpg";
import { Button } from "@mui/base";

const Content = () => {
  return (
    <div className="slider__content">
      <h1>
        Package
        <span>Design</span>
      </h1>
      <p>
        Are you looking to get hired in the comfort of your own house. Or maybe
        you are looking for that one skilled personnel to get your problems
        fixed. We got you covered
      </p>
      <Button className="loginBtn" variant="contained">
        Login
      </Button>
    </div>
  );
};

const CarouselFade = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="" src={bgChoc} alt="Chocolate" />
          <Carousel.Caption>
            <Content />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={bgChoc} alt="Chocolate" />
          <Carousel.Caption>
            <Content />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselFade;
