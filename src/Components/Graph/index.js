import * as d3 from 'd3'
import React, {useRef, useEffect} from 'react'
import { scaleBand, scaleLinear, scaleOrdinal} from 'd3-scale';
import styles from './graph.css'

const Graph = ({name, data}) => {
    const ref = useRef()
   
    useEffect(() => {
       
        const height = 260
        const width = 290

        const yScale = scaleLinear()
            .domain([0, 100])
            .range([height, 0])
        
        const xScale = scaleBand()
            .range([0, width])
            .domain(data.map((d) => d))
            .padding(0.2)
        
        const svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (i) => xScale(i))
            .attr("y", (d) => yScale(d) )
            .attr("width", xScale.bandwidth())
            .attr("height", (d, i) => height - yScale(d))
            .attr("fill", "steelblue");
        
    }, [])

    return(
        <svg className="body" ref ={ref} />
    )
}

export default Graph