import { useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });
  return scroll;
};

export default useScroll;
