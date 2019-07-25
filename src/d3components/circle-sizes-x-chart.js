import React, { useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const defaultData = [
  {
    label: '7am',
    sales: 20
  },
  {
    label: '8am',
    sales: 12
  },
  {
    label: '9am',
    sales: 8
  },
  {
    label: '10am',
    sales: 27
  }
]

const defaultCircleColor = 'purple'
const defaultTextColor = 'black'

const CircleSizesXChart = ({
  data = defaultData,
  circleColor = defaultCircleColor,
  textColor = defaultTextColor
}) => {
  // it looks like with svg ids need to be used instead.
  // const reference = useRef();

  useEffect(() => {
    const g = d3
      .select('#svgreference')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')

    g.append('circle')
      .attr('cy', 40)
      .attr('cx', (d, i) => (i + 1) * 50)
      .attr('r', d => d.sales)
      // Generally, position and size are .attr, and all other decoration is .style.
      .style('fill', circleColor)

    g.append('text')
      .attr('y', 90)
      .attr('x', (d, i) => (i + 1) * 50)
      .text(d => d.label)
      .style('fill', textColor)
      .style('text-anchor', 'middle')
  })

  return <svg id='svgreference' width='250' height='100' />
}

export default CircleSizesXChart
