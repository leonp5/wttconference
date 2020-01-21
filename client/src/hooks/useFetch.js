import React from "react";

export default function useFetch(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    }

    fetchData();
  }, [url]);

  return data;
}
