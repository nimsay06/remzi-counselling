import { Link } from "react-router-dom";

import { Carousel } from "react-bootstrap";

import Footer from "../Footer";
import TreeLight from "../assets/light-through-tree.jpg";
export default function About() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={TreeLight} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img src={TreeLight} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img src={TreeLight} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <span className="text-3xl bottom-0 mb-8 block ml-8">
        <Link to="/">⬅ </Link>
      </span>
      <Footer />
    </>
  );
}
