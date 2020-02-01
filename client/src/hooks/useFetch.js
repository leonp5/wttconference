import React from "react";

export default function useFetch(url) {
  const [data, setData] = React.useState([]);

  async function fetchData() {
    const token = localStorage.getItem("token:");
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

  React.useEffect(() => {
    fetchData();
  }, [url]);

  return data;
}
