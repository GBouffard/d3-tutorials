import React, { Fragment, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const defaultData = [
  { name: 'London', population: 8674000 },
  { name: 'New York', population: 8406000 },
  { name: 'Sydney', population: 4293000 },
  { name: 'Paris', population: 2244000 },
  { name: 'Beijing', population: 11510000 }
]

const Styledsvg = styled.svg`
  > text {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 12px;
    color: #333;
    text-anchor: start;
    fill: black;
    font-weight: bold;
  }
`

const Styledg = styled.g`
  > circle {
    fill: darkseagreen;
    cursor: pointer;
  }
`

const NameValueCircleSizesChart = ({
  nameValueData = defaultData,
  width = '760',
  height = '140'
}) => {
  const svgRef = useRef()
  const gRef = useRef()
  const scaleFactor = 0.000005

  useEffect(() => {
    const allCircles = d3.select(gRef.current).selectAll('circle')

    allCircles.data(nameValueData)

    allCircles
      .attr('r', d => d.population * scaleFactor)
      .attr('cx', (d, i) => i * 120)

    // not using arrow function to bound this to the correct circle.
    allCircles.on('click', function (d, i) {
      d3.select(this).style('fill', 'lightpink')

      // add city name on click. Did not manage to fully center
      d3.select(svgRef.current)
        .append('text')
        .attr('y', height / 2 + 6)
        .attr('x', (i + 1) * 120 - 70)
        .text(d.name)

      // add text within the .status div to tell which circle was clicked.
      d3.select('.status').text(`You last clicked on circle: ${i + 1}`)
    })
  })

  return (
    <Fragment>
      <Styledsvg ref={svgRef} width={width} height={height}>
        <Styledg ref={gRef} transform='translate(70, 70)'>
          {nameValueData.map(d => (
            <circle key={`circle-${d.name}`} />
          ))}
        </Styledg>
      </Styledsvg>
      <div class='status' />
    </Fragment>
  )
}

export default NameValueCircleSizesChart
