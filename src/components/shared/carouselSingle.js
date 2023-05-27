import Carousel from "nuka-carousel"

const CarouselSingle = () => {
  return (
    <Carousel
        autoplay={true}
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (null)}
        renderCenterRightControls={({ nextSlide }) => (null)}
        renderBottomCenterControls={({ currentSlide }) => (null)}
        renderTopCenterControls={({ currentSlide }) => (null)}
        
    >
      <h1>Hello 1</h1>
      <h1>Hello 2</h1>
      <h1>Hello 3</h1>
    </Carousel>
  )
}

export default CarouselSingle