import React, { Fragment } from "react";

import Hr from "./hr";

import BarChart from "./d3components/bar-chart";
import ContributionChart from "./d3components/contribution-chart";
import CircleSizesXChart from "./d3components/circle-sizes-x-chart";
import NameValueCircleSizesChart from "./d3components/name-value-circle-sizes-chart";
import NiceLinearScale from "./d3components/nice-linear-scale";
import LinesChart from "./d3components/lines-chart";
import LinesAreasChart from "./d3components/lines-areas-chart";
import NameValueBarChart from "./d3components/name-value-bar-chart";
import RadialChart from "./d3components/radial-chart";
import StackChart from "./d3components/stack-chart";
import ArcChart from "./d3components/arc-chart";
import PieChart from "./d3components/pie-chart";
import ScaleSequentialExamples from "./d3components/scale-sequential-examples";

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
    <div>Names & Values Circle sizes (with select click): </div>
    <NameValueCircleSizesChart />
    <Hr />
    <div>Names & Values bar chart (with sorting button): </div>
    <NameValueBarChart />
    <Hr />
    <div>Nice linear scale: </div>
    <NiceLinearScale />
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
    <div>Stack chart: </div>
    <StackChart />
    <Hr />
    <div>Arc chart (spread by angle so do not have to be a full circle)</div>
    <ArcChart />
    <Hr />
    <div>Pie chart (spread the given values over a full circle):</div>
    <PieChart />
    <Hr />
    <div>Scale Sequential Examples (some interpolators provided by D3): </div>
    <ScaleSequentialExamples />
    <Hr />
  </Fragment>
);

export default App;
