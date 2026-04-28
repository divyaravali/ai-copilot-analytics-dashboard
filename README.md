# AI Copilot Analytics Dashboard

A frontend analytics dashboard for monitoring AI copilot usage, reliability, latency, and user intent trends.

## Features

- KPI cards for sessions, prompts, success rate, latency, and cost
- Highcharts line chart for usage trends
- Highcharts donut chart for response status
- D3-powered user intent bubble visualization
- Mock API route simulating production analytics data
- Built with Next.js, TypeScript, Tailwind, D3, and Highcharts

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Highcharts
- D3
- Vercel

## Data

This project uses realistic mock analytics data through a local API route. The data layer is isolated so it can be replaced with Segment, Amplitude, Datadog, or a custom backend later.

## Future Improvements

- Add filters for date range and model type
- Add latency heatmap
- Add real-time streaming metrics
- Add CSV export
- Add drill-down views by user intent