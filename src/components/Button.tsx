import React from "react";

function Button({ bgColor, textColor, child }) {
  return (
    <a href="">
      <button
        style={{
          backgroundColor: bgColor,
          padding: "10px",
          borderRadius: "1px",
          borderColor: "white",
          borderWidth: "1px",
          borderStyle: "solid",
          cursor: "pointer",
        }}
      >
        <p style={{ color: textColor }}>{child}</p>
      </button>
    </a>
  );
}

export default Button;
