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
import image24 from "../assets/gallery24.jpg";
import image7 from "../assets/gallery7.jpg";
import image8 from "../assets/gallery8.jpg";
import image9 from "../assets/gallery9.jpg";
import image10 from "../assets/gallery10.jpg";
import image11 from "../assets/gallery11.jpg";
import image12 from "../assets/gallery12.jpg";
import image13 from "../assets/gallery13.jpg";
import image14 from "../assets/gallery14.jpg";
import image15 from "../assets/gallery15.jpg";
import image16 from "../assets/gallery16.jpg";
import image17 from "../assets/gallery17.jpg";
import image18 from "../assets/gallery18.jpg";
import image20 from "../assets/gallery20.jpg";
import image21 from "../assets/gallery21.jpg";
import image22 from "../assets/gallery22.jpg";
import image23 from "../assets/gallery23.jpg";

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
                src={image4}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image5}
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
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image7}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image8}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image9}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image10}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image11}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image12}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image13}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image14}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image15}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image16}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image17}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image18}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>

            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image20}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image21}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image22}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image23}
                alt="..."
                className="shadow-5-strong image-deco"
              />
            </MDBCarouselItem>
            <MDBCarouselItem className="text-center bg-image hover-zoom">
              <MDBCarouselElement
                src={image24}
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
