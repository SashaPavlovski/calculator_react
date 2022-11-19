import React from "react";
import { CountContainer } from "./../countContainerFolder/countContainer";

export const ConnectingAll = ({
  incrementConnetion,
  dicrementConnetion,
  countSumConnection,
  deleteConterConnection,
  deleteValue,
}) => {
  return (
    <>
      <CountContainer
        addFun={() => {
          incrementConnetion();
        }}
        dicrement={() => {
          dicrementConnetion();
        }}
        countSum={countSumConnection}
        deleteConter={deleteConterConnection}
        deleteValueCount={deleteValue}
      ></CountContainer>
    </>
  );
};
