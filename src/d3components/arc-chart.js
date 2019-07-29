import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

// value need to be with 0 and 2 * Math.PI
const defaultData = [
  { label: 'A', color: 'red', startAngle: 0, endAngle: 0.2 },
  { label: 'B', color: 'green', startAngle: 0.2, endAngle: 0.6 },
  { label: 'C', color: 'blue', startAngle: 0.6, endAngle: 1.4 },
  { label: 'D', color: 'pink', startAngle: 1.4, endAngle: 3 },
  { label: 'E', startAngle: 3, endAngle: 2 * Math.PI }
]

const Styledg = styled.g`
  fill: orange;
  stroke: white;

  > text {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 12px;
    fill: white;
    text-anchor: middle;
  }
`

const ArcChart = ({
  data = defaultData,
  HeightAndWidth = '200',
  defaultColor = 'orange'
}) => {
  const svgRef = useRef()
  const gRef = useRef()

  const arcGenerator = d3
    .arc()
    .innerRadius(HeightAndWidth / 10) // inner radius
    .outerRadius(HeightAndWidth / 2) // outer radius
    .startAngle(d => d.startAngle)
    .endAngle(d => d.endAngle)

  useEffect(() => {
    // set the areas
    d3.select(gRef.current)
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', d => d.color || defaultColor)

    // set the areas labels / text .centroid() is used to compute the label positions
    d3.select(gRef.current)
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      // nb: not using arrow functions in that case to make sure that 'this' correspond to the text below
      .each(function (d) {
        const centroid = arcGenerator.centroid(d)
        d3.select(this)
          .attr('x', centroid[0])
          .attr('y', centroid[1])
          .attr('dy', '0.33em')
          .text(d.label)
      })
  })

  return (
    <svg ref={svgRef} width={HeightAndWidth} height={HeightAndWidth}>
      <Styledg
        ref={gRef}
        transform={`translate(${HeightAndWidth / 2},${HeightAndWidth / 2})`}
      />
    </svg>
  )
}

export default ArcChart
