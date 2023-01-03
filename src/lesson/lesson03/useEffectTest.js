import React, { useState, useEffect } from "react";

function printClick() {
  console.log("mouse clicked");
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    window.addEventListener("click", printClick);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("click", printClick);
    };
  });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

export default FriendStatus;
