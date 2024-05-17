import React from "react";
import Dropdown from "../dropdown";
import { Box, TextField } from "@mui/material";
import { civilisation } from "../../constants/civilisation";
import ResultBox from "../resultbox";

const civss = ["Abbasid", "Ayyubids", "Byzantines"];

export default function TabContent() {
  return (
    <Box className="grid-cols-10 grid gap-4">
      <Box className="col-span-2 grid gap-4">
        <TextField label="testtext" />
        <Dropdown label="civ1" civs={civilisation} />
        <Dropdown label="civ2" civs={civilisation} />
        <Dropdown label="civ3" civs={civilisation} />
        <Dropdown label="civ4" civs={civilisation} />
      </Box>
      <Box className="col-span-8">
        <ResultBox civ={civss}></ResultBox>
      </Box>
    </Box>
  );
}
