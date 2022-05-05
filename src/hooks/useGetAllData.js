import { useEffect, useState } from "react";

const useGetAllData = (pathname) => {
  const [breakfastItems, setBreakfastItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${pathname}`)
      .then((res) => res.json())
      .then((data) => setBreakfastItems(data));
  }, [pathname]);
  return [breakfastItems, setBreakfastItems];
};

export default useGetAllData;
