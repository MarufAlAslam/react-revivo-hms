import Carousel from "nuka-carousel";

import slide1Img from "../../assets/images/svgs/slide1.svg";
import slide2Img from "../../assets/images/svgs/slide2.svg";
import slide3Img from "../../assets/images/svgs/slide3.svg";

const CarouselSingle = () => {
  const sliderData = [
    {
      id: 1,
      img: slide1Img,
      title: "Automate your hotel",
      desc: "Control and maximise your revenues and bookings like never before.",
    },
    {
      id: 2,
      img: slide2Img,
      title: "all bookings at fingertip",
      desc: "Get all your walk in and online bookings at one place.",
    },
    {
      id: 3,
      img: slide3Img,
      title: "AUTO OPTIMIZE ROOM STATUS",
      desc: "Once your rooms get booked any where or checked out it optimizes every where",
    },
  ];
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={3000}
      wrapAround={true}
      renderCenterLeftControls={({ previousSlide }) => null}
      renderCenterRightControls={({ nextSlide }) => null}
    >
      {sliderData.map((item, index) => (
        <div key={index} className="carousel-single text-center">
          <img src={item.img} className="block mx-auto" alt={item.title} />
          <h2 className="text-4xl font-semibold uppercase">
            {item.title}
          </h2>
          <p className="text-2xl mt-[40px]">
            {item.desc}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSingle;
