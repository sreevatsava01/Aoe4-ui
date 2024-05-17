import { Box } from "@mui/material";
import React from "react";

export default function ResultBox(props) {
  return (
    <Box className="grid grid-rows-7 gap-y-2">
      <Box className="row-span-1 text-center content-center">
        Result Text will go here
      </Box>
      {props.civ.map((civ, index) => (
        <Box
          key={index}
          className="grid grid-cols-4 place-items-center row-span-2"
        >
          <img src={civ + ".webp"} className="w-44 col-span-1"></img>
          <p className="col-span-2">win rate with {civ}</p>
        </Box>
      ))}
    </Box>
  );
}
