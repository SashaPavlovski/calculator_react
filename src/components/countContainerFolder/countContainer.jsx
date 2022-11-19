import React from "react";
import "./countContainer.css";

export const CountContainer = ({
  addFun,
  dicrement,
  countSum,
  deleteConter,
  deleteValueCount,
}) => {
  const zeroFum = () => {
    return countSum === 0 ? "Zero" : countSum;
  };

  const minusFun = () => {
    return "Zero" === zeroFum()
      ? "btn btn-light disabled"
      : "btn btn-secondary";
  };

  const colorOfBtn = () => {
    return "Zero" === zeroFum() ? "btn btn-warning" : "btn btn-primary";
  };
  const hidden = () => {
    return deleteValueCount ? "hidden" : "";
  };
  return (
    <div className={hidden()}>
      <span className={colorOfBtn()}>{zeroFum()}</span>
      <button
        className="btn btn-secondary"
        onClick={() => {
          addFun();
        }}
      >
        +
      </button>
      <button
        className={minusFun()}
        onClick={() => {
          if (countSum > 0) dicrement();
        }}
      >
        -
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteConter();
        }}
      >
        Delete
      </button>
    </div>
  );
};
