import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const defaultData = [4, 8, 15, 16, 23, 42]
const defaultColor = 'orange'

const ChartContainer = styled.div`
  > div {
    display: inline-block;
    background: ${({ color }) => color}
    width: 20px;
    margin-right: 3px;
  }
`

const BarChart = ({ dataSet = defaultData, color = defaultColor }) => {
  const anchor = useRef()

  useEffect(() => {
    d3.select(anchor.current)
      .selectAll('div')
      .data(dataSet)
      .enter()
      .append('div')
      .style('height', d => d + 'px')
  })

  return <ChartContainer ref={anchor} color={color} />
}

export default BarChart
