import React from "react";
import "./Gallery.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBContainer
} from "mdb-react-ui-kit";
import image1 from "../assets/gallery1.jpg";
import image2 from "../assets/gallery2.jpg";
import image6 from "../assets/gallery6.jpg";
import image4 from "../assets/gallery4.jpg";
import image5 from "../assets/gallery5.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <MDBContainer>
        <h3 className="title">Gallery</h3>
        <MDBCarousel fade touch={true} className="carousel">
          <MDBCarouselInner>
            <MDBCarouselItem className="active text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image1}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image2}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image6}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default Gallery;
