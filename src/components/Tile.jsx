import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../store";

function Tile({ tileData }) {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.calculator.display);

  let classes;
  if (tileData.name === "0") {
    classes += " col-span-2";
  }

  let dispatchAction;
  if (tileData.name === "AC") {
    dispatchAction = calculatorActions.clearDisplay(tileData);
  } else if (tileData.type === "value") {
    dispatchAction = calculatorActions.valueAdd(tileData);
  } else if (tileData.name === "+/-") {
    dispatchAction = calculatorActions.changeSign(tileData);
  } else if (tileData.name === "+") {
    dispatchAction = calculatorActions.addOperator(tileData);
  } else if (tileData.name === "-") {
    dispatchAction = calculatorActions.subtractOperator(tileData);
  } else if (tileData.name === "*") {
    dispatchAction = calculatorActions.multiplyOperator(tileData);
  } else if (tileData.name === "/") {
    dispatchAction = calculatorActions.divideOperator(tileData);
  } else if (tileData.name === "%") {
    dispatchAction = calculatorActions.moduloOperator(tileData);
  } else if (tileData.name === "=") {
    dispatchAction = calculatorActions.equals(tileData);
  }

  // useEffect(() => {
  //   if (typeof display === "number") {
  //     dispatchAction = calculatorActions.clearDisplay("didEquals");
  //   }
  // }, [display]);

  return (
    <button
      type="button"
      onClick={() => dispatch(dispatchAction)}
      className={
        "text-accentWhite border bg-pureDark border-primaryDark min-h-[4rem] flex justify-center items-center hover:bg-primaryDark hover:text-accentYellow " +
        classes
      }
    >
      {tileData.name}
    </button>
  );
}

export default Tile;
