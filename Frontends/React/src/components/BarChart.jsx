/**
 * @description Bar Chart component that uses amcharts.
 * @author Hector Mendoza
 * TODO: Fetch data from the backend.
 */

import { useState, useLayoutEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

/**
 * Definition for BarChart function component.
 *
 * @param {*} props Properties
 * @returns Handle to component
 */
function BarChart(props) {
  const xAxisRef = useRef(null);
  const seriesRef = useRef(null);
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
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
    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
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
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    /*
    // Set data
    let data = [{
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
    }];

    xAxis.data.setAll(data);
    series.data.setAll(data);
    */

    const fetchData = async() => {
      try {
        const response = await fetch('http://localhost:8080/v1/countries');
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        alert("Error fetching data");
      }
    };
    fetchData();

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    //cursor.lineY.set("visible", false);

    // store current chart reference
    xAxisRef.current = xAxis;
    seriesRef.current = series;

    // remember to do this, otherwise you get the error "You cannot have
    // multiple Roots on the same DOM node"
    return () => {
      root.dispose();
    };
  }, []); // end of useLayoutEffect, empty dependency array ensures this runs only once

  /**
   * Second useLayoutEffect is called when data changes. This updates the chart
   * data.
   */
  useLayoutEffect(() => {
    if (xAxisRef.current) {
      if (data)
      {
        xAxisRef.current.data.setAll(data);
        seriesRef.current.data.setAll(data);
      }
    }
  }, [data]); // Dependency on data state

  return (
    <div id="chartdiv" style={{ width: "800px", height: "500px" }}></div>
  );
}

export default BarChart;