import classNames from "classnames";
import React from "react";

export const Button = ({ className, text, onClick }) => {
  return (
    <button className={classNames("btn", className)} onClick={onClick}>
      {text}
    </button>
  );
};
