import { useEffect, useRef, useState } from "react";

export const useOutside = (initialVisible) => {
  const [isShow, setIsShow] = useState(initialVisible);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref, isShow, setIsShow };
};
