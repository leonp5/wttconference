import React from "react";

export default function useSessionStorage(key, initialValue) {
  let parsedItem;
  try {
    const item = sessionStorage.getItem(key);
    parsedItem = JSON.parse(item) || initialValue;
  } catch (error) {
    console.error(error);
    parsedItem = initialValue;
  }

  const [value, setValue] = React.useState(parsedItem);

  React.useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
