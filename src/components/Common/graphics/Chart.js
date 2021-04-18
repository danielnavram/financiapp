import React from "react";
import Chart from "react-apexcharts";
import { currencyFormatting } from "components/Common";

export const BarChart = ({ series, labelChart, type, rest }) => {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      stacked: true,
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        return currencyFormatting(val);
      },
    },
    legend: { show: false },
    grid: {
      show: false,
      padding: {
        top: -10,
        right: type === "line" ? 40 : 0,
        bottom: -10,
        left: type === "line" ? 40 : 0,
      },
    },
    tooltip: { enabled: false },
    xaxis: {
      categories: labelChart,
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      floating: true,
      offsetX: -20,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  return (
    <div className="mixed-chart">
      <Chart
        series={series}
        labels={labelChart}
        options={options}
        type={type}
        width="100%"
        {...rest}
      />
    </div>
  );
};
