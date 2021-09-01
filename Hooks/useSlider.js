import { useState } from "react";
const useSlider = (data) => {
  const [slider, setSlider] = useState(0);
  const prevSlide = () => {
    slider === 0 ? setSlider(data.length - 1) : setSlider(slider - 1);
  };
  const nextSlide = () => {
    slider === data.length - 1 ? setSlider(0) : setSlider(slider + 1);
  };
  return {
    slider,
    prevSlide,
    nextSlide,
  };
};
export default useSlider;
