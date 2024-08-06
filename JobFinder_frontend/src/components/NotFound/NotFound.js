import React from "react";
import oops from "../../assets/images/oops.svg";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundColor: "#fce4ec", // Light pink background
        color: "#d81b60", // Deep pink text color
      }}
    >
      <img
        style={{
          height: "30rem",
          width: "30rem",
          marginBottom: "20px",
        }}
        src={oops}
        alt="404"
      />
      <h1 style={{ fontSize: "2.5rem", fontWeight: "600" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.05rem", fontWeight: "200" }}>
        The page you are looking for does not exist. Please check the URL or go
        back to the homepage.
      </p>
    </div>
  );
};

export default NotFound;
