import React, { Fragment } from 'react'

import Hr from './hr'

import BarChart from './d3components/bar-chart'
import ContributionChart from './d3components/contribution-chart'
import CircleSizesXChart from './d3components/circle-sizes-x-chart'
import LinesChart from './d3components/lines-chart'
import LinesAreasChart from './d3components/lines-areas-chart'
import NameValueBarChart from './d3components/name-value-bar-chart'
import RadialChart from './d3components/radial-chart'
import ArcChart from './d3components/arc-chart'
import PieChart from './d3components/pie-chart'

const App = () => (
  <Fragment>
    <div>Bar chart: </div>
    <BarChart />
    <Hr />
    <div>Contribution chart: </div>
    <ContributionChart />
    <Hr />
    <div>Circle sizes x chart: </div>
    <CircleSizesXChart />
    <Hr />
    <div>Names & Values bar chart: </div>
    <NameValueBarChart />
    <Hr />
    <div>Lines chart: </div>
    <LinesChart />
    <Hr />
    <div>Lines areas chart: </div>
    <LinesAreasChart />
    <Hr />
    <div>Radial chart: </div>
    <RadialChart />
    <Hr />
    <div>Arc chart (spread by angle so do not have to be a full circle)</div>
    <ArcChart />
    <Hr />
    <div>Pie chart (spread the given values over a full circle):</div>
    <PieChart />
    <Hr />
  </Fragment>
)

export default App
