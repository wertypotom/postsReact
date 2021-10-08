import React from "react";
import cl from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.btn}>
      {children}
    </button>
  );
};

export default Button;
