import React, { useEffect } from "react";
import * as d3 from "d3";

const defaultData = [0.243, 0.584, 0.987, 0.153, 0.433];

const NiceLinearScale = ({ myData = defaultData }) => {
  const extent = d3.extent(myData);

  const linearScale = d3
    .scaleLinear()
    .domain(extent)
    .range([0, 600])
    // .nice() rounds the domain to ‘nice’ round values
    .nice();

  const axis = d3.axisBottom(linearScale);

  useEffect(() => {
    d3.select(".axis").call(axis);
  });

  return (
    <svg width="700" height="100">
      <g class="axis" transform="translate(20, 40)" />
    </svg>
  );
};

export default NiceLinearScale;
