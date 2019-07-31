import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

// value need to be with 0 and 2 * Math.PI
const defaultData = [
  { name: 'Apples', color: 'red', quantity: 20 },
  { name: 'Bananas', color: 'green', quantity: 40 },
  { name: 'Cherries', color: 'cyan', quantity: 50 },
  { name: 'Damsons', color: 'goldenrod', quantity: 10 },
  { name: 'Elderberries', quantity: 30 }
]

const Styledg = styled.g`
  stroke: white;

  > text {
    font-family: "Verdana", Helvetica, sans-serif;
    font-size: 10px;
    fill: white;
    text-anchor: middle;
  }
`

const PieChart = ({
  nameValueData = defaultData,
  HeightAndWidth = '200',
  defaultColor = 'purple'
}) => {
  const gRef = useRef()

  const pieGenerator = d3
    .pie()
    .value(d => d.quantity)
    .sort((a, b) => a.name.localeCompare(b.name))

  const arcGenerator = d3
    .arc()
    .innerRadius(20)
    .outerRadius(100)

  useEffect(() => {
    // set the areas
    d3.select(gRef.current)
      .selectAll('path')
      .data(pieGenerator(nameValueData))
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', d => d.data.color || defaultColor)

    // set the areas labels / text .centroid() is used to compute the label positions
    d3.select(gRef.current)
      .selectAll('text')
      .data(pieGenerator(nameValueData))
      .enter()
      .append('text')
      // nb: not using arrow functions in that case to make sure that 'this' correspond to the text below
      .each(function (d) {
        const centroid = arcGenerator.centroid(d)
        d3.select(this)
          .attr('x', centroid[0])
          .attr('y', centroid[1])
          .attr('dy', '0.33em')
          .text(d.data.name)
      })
  })

  return (
    <svg width={HeightAndWidth} height={HeightAndWidth}>
      <Styledg
        ref={gRef}
        transform={`translate(${HeightAndWidth / 2},${HeightAndWidth / 2})`}
      />
    </svg>
  )
}

export default PieChart
