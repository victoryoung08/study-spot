/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [vieportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return vieportWidth;
};

export default useViewportWidth;
