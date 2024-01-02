/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState<number | null>(null); // Initialize to null

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    // Check if `window` is defined (client-side) before attaching the event listener.
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth); // Set initial width on the client side
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
