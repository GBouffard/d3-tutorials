import React, { Fragment, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const defaultData = [
  { name: 'London', population: 8674000 },
  { name: 'New York', population: 8406000 },
  { name: 'Sydney', population: 4293000 },
  { name: 'Paris', population: 2244000 },
  { name: 'Beijing', population: 11510000 }
]

const Styledg = styled.g`
  > rect {
    fill: steelblue;
    &:hover {
      fill: orange;
    }
  }

  > text {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 12px;
    color: #333;
    text-anchor: end;
  }
`

const StyledButton = styled.button`
  font-size: 25px;
  background: sandybrown;
  color: darkred;
`

const NameValueBarChart = ({
  nameValueData = defaultData,
  width = '760px',
  height = '140px'
}) => {
  // the demo didn't use a ref but to select the rect/text from this svg a ref is needed.
  const gRef = useRef()
  const scaleFactor = 0.00004

  // Join cities to rect elements and modify height, width and position
  const renderRectangles = () => {
    d3.select(gRef.current)
      .selectAll('rect')
      .data(nameValueData)
      .attr('height', 19)
      .attr('width', d => d.population * scaleFactor)
      .attr('y', (d, i) => i * 20)
  }

  // Join cities to text elements and modify content and position
  const renderNames = () => {
    d3.select(gRef.current)
      .selectAll('text')
      .data(nameValueData)
      .attr('y', (d, i) => i * 20 + 13)
      .attr('x', -4)
      .text(d => d.name)
  }

  const sort = () => {
    nameValueData.sort((a, b) => b.population - a.population)
    renderRectangles()
    renderNames()
  }

  useEffect(() => {
    renderRectangles()
    renderNames()
  })

  return (
    <Fragment>
      <svg width={width} height={height}>
        <Styledg ref={gRef} transform='translate(70, 30)'>
          {nameValueData.map(d => (
            <Fragment>
              <rect key={`rect-${d.name}`} />
              <text key={`text-${d.name}`} />
            </Fragment>
          ))}
        </Styledg>
      </svg>

      <StyledButton onClick={() => sort()}>Sort cities</StyledButton>
    </Fragment>
  )
}

export default NameValueBarChart
