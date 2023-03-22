import React from "react";
import { useSelector } from "react-redux";
import Tile from "./Tile";

const tiles = [
  {
    name: "AC",
    type: "action",
  },
  {
    name: "+/-",
    type: "operator",
  },
  {
    name: "%",
    type: "operator",
  },
  {
    name: "/",
    type: "operator",
  },
  {
    name: "7",
    type: "value",
  },
  {
    name: "8",
    type: "value",
  },
  {
    name: "9",
    type: "value",
  },
  {
    name: "*",
    type: "operator",
  },
  {
    name: "4",
    type: "value",
  },
  {
    name: "5",
    type: "value",
  },
  {
    name: "6",
    type: "value",
  },
  {
    name: "-",
    type: "operator",
  },
  {
    name: "1",
    type: "value",
  },
  {
    name: "2",
    type: "value",
  },
  {
    name: "3",
    type: "value",
  },
  {
    name: "+",
    type: "operator",
  },
  {
    name: "0",
    type: "value",
  },
  {
    name: ".",
    type: "value",
  },
  {
    name: "=",
    type: "action",
  },
];

function Calculator() {
  const display = useSelector((state) => state.calculator.display);

  return (
    <div className="w-[24rem] shadow-md shadow-black">
      <div className="max-w-sm bg-pureDark min-h-[4rem] text-accentYellow flex justify-end items-center pr-8 text-3xl">
        {display}
      </div>
      <div className="max-w-sm  bg-black grid grid-rows-5 grid-cols-4">
        {tiles.map((tile) => {
          return <Tile key={tile.name} tileData={tile} />;
        })}
      </div>
    </div>
  );
}

export default Calculator;
