import React, { useState } from "react";
import "./app.css";
import { ConnectingAll } from "./components/connectingAllFolder/connectingAll.jsx";
import { NavBar } from "./components/navBarFolder/navBar";

export const App = () => {
  const [total, setTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [deleteHidden, setDeleteHidden] = useState(false);
  const [deleteHidden2, setDeleteHidden2] = useState(false);

  return (
    <div className="App">
      <NavBar totalCount={total}></NavBar>
      <button
        className="btn btn-primary"
        onClick={() => {
          setTotal(0);
          setCounter(0);
          setCounter2(0);
        }}
      >
        Reset
      </button>
      <ConnectingAll
        incrementConnetion={() => {
          setTotal(total + 1);
          setCounter(counter + 1);
        }}
        dicrementConnetion={() => {
          setTotal(total - 1);
          setCounter(counter - 1);
        }}
        countSumConnection={counter}
        deleteConterConnection={() => {
          setDeleteHidden(true);
          setTotal(total - counter);
        }}
        deleteValue={deleteHidden}
      ></ConnectingAll>
      <ConnectingAll
        incrementConnetion={() => {
          setTotal(total + 1);
          setCounter2(counter2 + 1);
        }}
        dicrementConnetion={() => {
          setTotal(total - 1);
          setCounter2(counter2 - 1);
        }}
        countSumConnection={counter2}
        deleteConterConnection={() => {
          setDeleteHidden2(true);
          setTotal(total - counter2);
        }}
        deleteValue={deleteHidden2}
      ></ConnectingAll>
    </div>
  );
};
