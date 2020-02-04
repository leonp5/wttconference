import React from "react";

export default function useCheckToken() {
  const [status, setStatus] = React.useState();
  const token = sessionStorage.getItem("token:");

  React.useEffect(() => {
    async function fetchToken() {
      console.log("token:", token);
      const response = await fetch("/api/verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        }
      });
      if (response.status !== 200) {
        sessionStorage.removeItem("token:");
        setStatus(false);
        console.log("response", response);
      } else {
        setStatus(true);
      }
    }
    fetchToken();
  }, [token]);
  console.log("status", status);
  return status;
}
