import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import CarouselItem from "./CarouselItem";

const NewCarousel = () => {
  const carouselRef = useRef();

  return (
    <div className="flex justify-center items-center w-full px-5 pb-12">
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        itemsToScroll={1}
        transitionMs={500}
        disableArrowsOnEnd={false}
        onPrevStart={(nextItemObject) => {
          if (nextItemObject.index === 0) carouselRef.current.goTo(5);
        }}
        onNextStart={(nextItemObject) => {
          if (nextItemObject.index === 5) carouselRef.current.goTo(0);
        }}
      >
        <CarouselItem
          img="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Memory"
          text="This is memory"
        ></CarouselItem>

        <CarouselItem
          img="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Finger Dexterity"
          text="This is finger dexterity"
        ></CarouselItem>

        <CarouselItem
          img="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          title="Reaction Time"
          text="This is reaction time"
        ></CarouselItem>

        <CarouselItem
          img="https://images.unsplash.com/photo-1591040877105-24553dbb7777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          title="Hand-Eye Coordination"
          text="This is hand-eye coordination"
        ></CarouselItem>

        <CarouselItem
          img="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Computer Introduction"
          text="This is PC intro"
        ></CarouselItem>

        <CarouselItem
          img="https://images.unsplash.com/photo-1614107151491-6876eecbff89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          title="Language Support"
          text="This is language support"
        ></CarouselItem>
      </Carousel>
    </div>
  );
};

export default NewCarousel;
