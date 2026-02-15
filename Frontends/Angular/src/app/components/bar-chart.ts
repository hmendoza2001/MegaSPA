/*
 * Copyright (c) 2026 Hector Mendoza
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'bar-chart',
  standalone: true,
  templateUrl: './bar-chart.html'
})

export class ChartComponent {
  private root!: am5.Root;
  private series:any;
  private xAxis:any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  async ngOnInit() {
    try
    {
      const response = await fetch('http://localhost:8080/v1/countries');
      if (!response.ok)
      {
        throw new Error('Network response was not OK');
      }

      let data = await response.json();
      this.xAxis.data.setAll(data);
      this.series.data.setAll(data);
    }
    catch (error)
    {
      alert("Error fetching data " + error);
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX: true,
          paddingLeft:0,
          paddingRight:1
        })
      );

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xAxisRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 30,
        minorGridEnabled: true
      });

      xAxisRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });

      xAxisRenderer.grid.template.setAll({
        location: 1
      })

      // Create X-Axis
      //let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      this.xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xAxisRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      let yAxisRenderer = am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })

      // Create Y-axis
      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yAxisRenderer
      }));

      // change label and grid color
      //yAxis.get("renderer").labels.template.set("fill", am5.color(0xffffff));
      //yAxis.get("renderer").grid.template.set("stroke", am5.color(0xffffff));

      // change legend color
      //legend.labels.template.set("fill", am5.color(0xffffff))

      // Create series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      //let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      this.series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: this.xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));

      // IMPORTANT: There is a main difference between React and Angular when
      // declaring the folloing lines. Angular needs ?. after chart and
      // get("colors") because those objects might be null during the first
      // passes
      let localSeries = this.series;
      this.series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
      this.series.columns.template.adapters.add("fill", function (fill:any, target:any) {
        return chart?.get("colors")?.getIndex(localSeries.columns.indexOf(target));
      });
      this.series.columns.template.adapters.add("stroke", function (stroke:any, target:any) {
        return chart?.get("colors")?.getIndex(localSeries.columns.indexOf(target));
      });

      // Set data
      /*let data = [{
        country: "USA",
        value: 2025
      }, {
        country: "China",
        value: 1882
      }, {
        country: "Japan",
        value: 1809
      }, {
        country: "Germany",
        value: 1322
      }, {
        country: "UK",
        value: 1122
      }, {
        country: "France",
        value: 1114
      }, {
        country: "India",
        value: 984
      }, {
        country: "Spain",
        value: 711
      }, {
        country: "Netherlands",
        value: 665
      }, {
        country: "South Korea",
        value: 443
      }, {
        country: "Canada",
        value: 441
      }];*/

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}