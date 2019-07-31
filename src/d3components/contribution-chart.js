import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const defaultData = [0.2, 0.4, 0, 0, 0.13, 0.92]

// lightgreen / darkgreen
const colorMap = d3.interpolateRgb(d3.rgb('#d6e685'), d3.rgb('#1e6823'))

const ContributionContainer = styled.div`
  > div {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }
`

const ContributionChart = ({ dataSet = defaultData }) => {
  const divRef = useRef()

  useEffect(() => {
    d3.select(divRef.current)
      .selectAll('div')
      .data(dataSet)
      .enter()
      .append('div')
      .style('background-color', d => (d === 0 ? 'lightgrey' : colorMap(d)))
  })

  return <ContributionContainer ref={divRef} />
}

export default ContributionChart
