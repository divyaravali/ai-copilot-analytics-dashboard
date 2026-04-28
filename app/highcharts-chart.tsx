"use client";

import dynamic from "next/dynamic";

type ChartPanelProps = {
  options: Record<string, unknown>;
};

const HighchartsRenderer = dynamic(() => import("./highcharts-renderer"), {
  loading: () => <div className="h-80 animate-pulse rounded-lg bg-slate-100" />,
  ssr: false,
});

export default function ChartPanel({ options }: ChartPanelProps) {
  return <HighchartsRenderer options={options} />;
}
