import React, {Component} from 'react';

import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../showCase';
const {
  BasicSankeyExample,
  VoronoiSankeyExample,
  EnergySankeyExample,
  LinkEventSankeyExample,
  LinkHintSankeyExample
} = showCase;

const SANKEYS = [{
  name: 'Basic',
  component: BasicSankeyExample,
  componentName: 'BasicSankeyExample',
  docsLink: 'http://uber.github.io/react-vis/documentation/other-charts/sankey-diagram',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/sankey/index.js'
}, {
  name: 'With Voronoi Selection',
  component: VoronoiSankeyExample,
  componentName: 'VoronoiSankeyExample'
}, {
  name: 'With link selection',
  component: LinkEventSankeyExample,
  componentName: 'LinkEventSankeyExample'
}, {
  name: 'With hint (for links)',
  component: LinkHintSankeyExample,
  componentName: 'LinkHintSankeyExample'
}, {
  name: 'Energy Example',
  component: EnergySankeyExample,
  componentName: 'EnergySankeyExample'
}];

class SankeysSection extends Component {
  render() {
    return (
      <article id="sankeys">
        <h1>Sankeys</h1>
        {SANKEYS.map(mapSection)}
      </article>
    );
  }
}

export default SankeysSection;
