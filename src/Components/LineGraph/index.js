import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { scaleLinear } from "d3-scale";
import "./graph.css";

const LineGraph = ({ data }) => {
  const ref = useRef();
  useEffect(() => {
    const width = 260;
    const height = 240;

    const xScale = scaleLinear().domain([0, data.length]).range([0, width]);
    const yScale = scaleLinear()
      .domain([Math.min(...data), Math.max(...data) + 10])
      .range([height, 0]);

    const xAxis = d3.axisBottom().scale(xScale);

    const yAxis = d3.axisLeft().scale(yScale);

    const line = d3
      .line()
      .x((d) => xScale(data.indexOf(d)))
      .y((d) => yScale(d));

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", 300)
      .attr("height", 270)
      .append("g")
      .attr("transform", "translate(" + 30 + ")");

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g").call(yAxis);

    svg.append("path").datum(data).attr("class", "line").attr("d", line);
  }, []);

  return <svg className="body" ref={ref} />;
};

export default LineGraph;
