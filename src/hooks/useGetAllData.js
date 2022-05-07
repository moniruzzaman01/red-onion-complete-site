import { useEffect, useState } from "react";

const useGetAllData = (pathname) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${pathname}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [pathname]);
  return [Items, setItems];
};

export default useGetAllData;
