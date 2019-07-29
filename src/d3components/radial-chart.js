import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

// value rounds are Math.Pi * pos with ps between 0 and 2. The 2nd value is the measure
const defaultDataOne = [
  [0, 80], // top point
  [Math.PI * 0.25, 80],
  [Math.PI * 0.5, 30],
  [Math.PI * 0.75, 80],
  [Math.PI, 80],
  [Math.PI * 1.25, 80],
  [Math.PI * 1.5, 80],
  [Math.PI * 1.75, 80],
  [Math.PI * 2, 80]
]

const defaultDataTwo = [
  { angle: 0, r0: 20, r1: 80 },
  { angle: Math.PI * 0.25, r0: 20, r1: 40 },
  { angle: Math.PI * 0.5, r0: 20, r1: 80 },
  { angle: Math.PI * 0.75, r0: 20, r1: 40 },
  { angle: Math.PI, r0: 20, r1: 80 },
  { angle: Math.PI * 1.25, r0: 20, r1: 40 },
  { angle: Math.PI * 1.5, r0: 20, r1: 80 },
  { angle: Math.PI * 1.75, r0: 20, r1: 40 },
  { angle: Math.PI * 2, r0: 20, r1: 80 }
]

const StyledSvg = styled.svg`
  #pathOne {
    stroke: purple;
    fill: transparent;
  }

  #pathTwo {
    fill: darkgoldenrod;
  }
`

const RadialChart = ({
  dataOne = defaultDataOne,
  dataTwo = defaultDataTwo,
  HeightAndWidth = '200'
}) => {
  const gRef = useRef()

  const radialLineGenerator = d3.radialLine()

  const radialAreaGenerator = d3
    .radialArea()
    .angle(d => d.angle)
    .innerRadius(d => d.r0)
    .outerRadius(d => d.r1)

  useEffect(() => {
    d3.select(gRef.current)
      .append('path')
      .attr('id', 'pathOne')
      .attr('stroke-width', 2)
      .attr('d', radialLineGenerator(dataOne))

    d3.select(gRef.current)
      .append('path')
      .attr('id', 'pathTwo')
      .attr('stroke-width', 2)
      .attr('d', radialAreaGenerator(dataTwo))
  })

  return (
    <StyledSvg width={HeightAndWidth} height={HeightAndWidth}>
      {/* The translate(x, y) transform function moves the object by x and y in pixels */}
      <g
        ref={gRef}
        transform={`translate(${HeightAndWidth / 2},${HeightAndWidth / 2})`}
      />
    </StyledSvg>
  )
}

export default RadialChart
