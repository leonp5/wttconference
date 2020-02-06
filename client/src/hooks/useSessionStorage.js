import React from "react";

export default function useSessionStorage(key, data) {
  React.useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);
}
