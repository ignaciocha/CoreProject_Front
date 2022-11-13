import React from "react";
import "react-slideshow-image/dist/styles.css";
import "../assets/img/slideImage/img1.jpg";
import "../assets/img/slideImage/img2.jpeg";
import "../assets/img/slideImage/img3.png";
import "../assets/img/slideImage/img4.jpg";
import "../assets/img/slideImage/img5.jpg";
import Carousel from "react-bootstrap/Carousel";

const slideImages = [
  {
    url: "https://wallpaperaccess.com/full/3320664.png",
    caption: "롤",
  },
  {
    url: "https://images8.alphacoders.com/104/1049882.jpg",
    caption: "옵치2",
  },
  {
    url: "https://preview.redd.it/46vbxutg18561.png?width=1920&format=png&auto=webp&s=3a9cf233b1ac6647baa7dd7324b6b0f36e37d057",
    caption: "발로란트",
  },

  {
    url: "https://wallpapermoon.com/wp-content/uploads/2022/04/02950051.jpg",
    caption: "로스트아크",
  },
];

const MainCarousel = () => {
  return (
    <div className="slide-container">
      <Carousel>
        {slideImages.map((slideImage, index) => (
          <Carousel.Item interval={1500}>
            <img
              className="carousel-img"
              src={slideImage.url}
              alt={slideImage + index}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
