import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

// the following values are by default pixels as well so height/width of the SVG need to be able to include these
const defaultDataOne = [
  [0, 80],
  [100, 100],
  [200, 30],
  [300, 50],
  [400, 40],
  [500, 80]
]

// is y axis inverted?
const defaultDataTwo = [
  [0, 180],
  [100, 120],
  null,
  [300, 70],
  [400, 90],
  [500, 100]
]

const defaultDataThree = [
  [0, 50],
  [100, 150],
  [200, 180],
  [300, 10],
  [400, 160],
  [500, 120]
]

const StyledSvg = styled.svg`
  /* needed so fill follows the lines */
  > path {
    fill: transparent;
  }
  #pathOne {
    stroke: blue;
  }

  #pathTwo {
    stroke: green;
  }

  #pathThree {
    stroke: red;
  }
`

const LinesChart = ({
  dataOne = defaultDataOne,
  dataTwo = defaultDataTwo,
  dataThree = defaultDataThree,
  width = '600px',
  height = '200px'
}) => {
  const svgRef = useRef()

  useEffect(() => {
    const lineGenerator = d3.line()
    const lineGeneratorWithGaps = d3.line().defined(d => d !== null)
    const curvedLineGenerator = d3.line().curve(d3.curveCardinal)

    d3.select(svgRef.current)
      .append('path')
      .attr('id', 'pathOne')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator(dataOne))

    d3.select(svgRef.current)
      .append('path')
      .attr('id', 'pathTwo')
      .attr('stroke-width', 2)
      .attr('d', lineGeneratorWithGaps(dataTwo))

    d3.select(svgRef.current)
      .append('path')
      .attr('id', 'pathThree')
      .attr('stroke-width', 2)
      .attr('d', curvedLineGenerator(dataThree))
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

export default LinesChart
