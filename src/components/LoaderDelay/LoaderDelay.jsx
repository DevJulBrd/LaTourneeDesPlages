import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

function LoaderDelay() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return showLoader ? <Loader /> : null;
}

export default LoaderDelay;
