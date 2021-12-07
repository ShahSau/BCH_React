import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <small>shahriar&copy; {year} </small>
      </p>
    </footer>
  );
};

export default Footer;
