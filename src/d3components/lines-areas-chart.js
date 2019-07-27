import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

// the following values are by default pixels as well so height/width of the SVG need to be able to include these
const defaultDataOne = [
  [0, 20],
  [100, 100],
  [200, 130],
  [300, 50],
  [400, 180],
  [500, 80]
]

const defaultDataTwo = [
  { x: 0, low: 30, high: 80 },
  { x: 100, low: 80, high: 100 },
  { x: 200, low: 20, high: 30 },
  { x: 300, low: 20, high: 50 },
  { x: 400, low: 10, high: 40 },
  { x: 500, low: 50, high: 80 }
]

const StyledSvg = styled.svg`
  /* needed fill on path to follow the lines */
  > path {
    fill: transparent;
  }
  #pathOne {
    stroke: black;
    fill: yellow;
  }

  #pathTwo {
    stroke: darkred;
    fill: pink;
  }
`

const LinesAreasChart = ({
  dataOne = defaultDataOne,
  dataTwo = defaultDataTwo,
  width = '600px',
  height = '200px'
}) => {
  const svgRef = useRef()

  const areaGenerator = d3.area() // .y0(100); option to configure the yo line

  // y axis seems to go downward by default
  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([200, 0])

  const areaGeneratorLowAndHigh = d3
    .area()
    .x(d => d.x)
    .y0(d => yScale(d.low))
    .y1(d => yScale(d.high))

  useEffect(() => {
    d3.select(svgRef.current)
      .append('path')
      .attr('id', 'pathOne')
      .attr('stroke-width', 2)
      .attr('d', areaGenerator(dataOne))

    d3.select(svgRef.current)
      .append('path')
      .attr('id', 'pathTwo')
      .attr('stroke-width', 2)
      .attr('d', areaGeneratorLowAndHigh(dataTwo))
  })

  return (
    <StyledSvg
      ref={svgRef}
      viewBox={`0,0,${width},${height}`}
      width={width}
      height={height}
    />
  )
}

export default LinesAreasChart
