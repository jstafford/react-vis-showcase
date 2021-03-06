import React, {Component} from 'react';

import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../showCase';
const {
  CustomRadiusRadialChart,
  DonutChartExample,
  SimpleRadialChart
} = showCase;
/* eslint-disable max-len */
const RADIAL = [{
  name: 'Simple Radial Chart',
  component: SimpleRadialChart,
  componentName: SimpleRadialChart,
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/radial-chart/index.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/other-charts/radial-chart'
}, {
  name: 'Simple Donut Chart',
  component: DonutChartExample,
  componentName: DonutChartExample
}, {
  name: 'Custom Radius',
  component: CustomRadiusRadialChart,
  componentName: CustomRadiusRadialChart
}];
/* eslint-enable max-len */

class RadialShowcase extends Component {
  render() {
    return (
      <article id="radial-charts">
        <h1>Radial Chart</h1>
        {RADIAL.map(mapSection)}
      </article>
    );
  }
}

export default RadialShowcase;
