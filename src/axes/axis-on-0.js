// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';

export default function AxisOn0({
  xDomain = [-1, 3],
  yDomain = [-5, 15],
  xAxisOn0 = true,
  yAxisOn0 = true,
  verticalTickValues = [],
  horizontalTickValues = [0]
}) {
  return (
    <XYPlot
      width={300}
      height={300}
      {...{xDomain, yDomain}}
      >
      {!verticalTickValues ||
        verticalTickValues.length ?
        <VerticalGridLines tickValues={verticalTickValues}/> :
        null}
      {!horizontalTickValues ||
        horizontalTickValues.length ?
        <HorizontalGridLines tickValues={horizontalTickValues}/> :
        null}
      <XAxis on0={xAxisOn0} />
      <YAxis on0={yAxisOn0} />
      <LineSeries
        data={[
          {x: -1, y: 10},
          {x: 0, y: 5},
          {x: 1, y: 3},
          {x: 2, y: -5},
          {x: 3, y: 15}
        ]}/>
    </XYPlot>
  );
}
