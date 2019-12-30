import React from "react";

function useOnClick(callback) {
  React.useEffect(() => {
    window.addEventListener("mouseup", callback);
    return () => window.removeEventListener("mouseup", callback);
  }, ["mouseup", callback]);
}

export default useOnClick;
