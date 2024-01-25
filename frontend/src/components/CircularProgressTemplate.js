import React from "react";
import {
    CircularProgress,
    CircularProgressLabel,
  } from "@chakra-ui/react";
import "../styles/CircularProgressTemplate.css";

const CircularProgressTemplate = ({value}) => {
  const val = value;
  console.log(val);
  return (
    <div className="circular-progress">
      <CircularProgress value={val} color="teal" size="200px" thickness='5px'>
        <CircularProgressLabel color="#1a202c">{val}%</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default CircularProgressTemplate;
