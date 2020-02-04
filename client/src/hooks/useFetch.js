import React from "react";

export default function useFetch(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const token = sessionStorage.getItem("token:");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        }
      });

      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  }, [url]);

  return data;
}
