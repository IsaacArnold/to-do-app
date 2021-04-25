import React from "react";

const Header = () => {
  const day = new Date();
  const hour = day.getHours();

  let message;
  if (hour >= 1 && hour <= 11) {
    message = "Good Morning!";
  } else if (hour >= 12 && hour <= 17) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  return (
    <div className="header">
      <div className="header-bg"></div>
      <h1>{message}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#161e29" points="0,100 100,0 100,100" />
      </svg>
    </div>
  );
};

export default Header;
