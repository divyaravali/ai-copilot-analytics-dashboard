"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type HighchartsRendererProps = {
  options: Highcharts.Options;
};

export default function HighchartsRenderer({ options }: HighchartsRendererProps) {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
