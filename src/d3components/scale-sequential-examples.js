import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const interpolators = [
  'interpolateViridis',
  'interpolateInferno',
  'interpolateMagma',
  'interpolatePlasma',
  'interpolateWarm',
  'interpolateCool',
  'interpolateRainbow',
  'interpolateCubehelixDefault'
]

const ScaleSequentialExamples = ({ width = '700', height = '580' }) => {
  const svgRef = useRef()
  //   const gRef = useRef();

  useEffect(() => {
    const linearScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, 600])

    const sequentialScale = d3.scaleSequential().domain([0, 100])

    const myData = d3.range(0, 100, 2)

    // not binding in order to use this
    function dots (d) {
      sequentialScale.interpolator(d3[d])

      d3.select(this)
        .append('text')
        .attr('y', -10)
        .text(d)

      d3.select(this)
        .selectAll('rect')
        .data(myData)
        .enter()
        .append('rect')
        .attr('x', d => linearScale(d))
        .attr('width', 11)
        .attr('height', 30)
        .style('fill', d => sequentialScale(d))
    }

    d3.select('#wrapper')
      // d3.select(gRef.current)
      .selectAll('g.interpolator')
      .data(interpolators)
      .enter()
      .append('g')
      .classed('interpolator', true)
      .attr('transform', (d, i) => `translate(0, ${i * 70})`)
      .each(dots)
  })

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g id='wrapper' transform='translate(40, 40)' />
    </svg>
  )
}

export default ScaleSequentialExamples
