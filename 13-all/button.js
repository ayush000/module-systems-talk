import React from "react";

const Button = ({ bg, color, children }) => {
  return <button style={{ background: bg, color }}>{children}</button>;
};

export default Button;
