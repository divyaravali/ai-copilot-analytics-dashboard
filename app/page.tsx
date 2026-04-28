import { intentData, kpis, statusData, usageTrend } from "@/src/data/aiMetrics";
import ChartPanel from "./highcharts-chart";

export default function Home() {
  const lineOptions = {
    title: { text: "AI Copilot Usage Trend" },
    xAxis: { categories: usageTrend.map((d) => d.date) },
    yAxis: { title: { text: "Count" } },
    series: [
      {
        name: "Sessions",
        data: usageTrend.map((d) => d.sessions),
      },
      {
        name: "Prompts",
        data: usageTrend.map((d) => d.prompts),
      },
    ],
  };

  const donutOptions = {
    chart: { type: "pie" },
    title: { text: "Response Status" },
    plotOptions: {
      pie: {
        innerSize: "60%",
      },
    },
    series: [
      {
        name: "Responses",
        data: statusData,
      },
    ],
  };

  const maxCount = Math.max(...intentData.map((item) => item.count), 1);

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            AI Copilot Analytics Dashboard
          </h1>
          <p className="mt-2 text-slate-600">
            Monitor AI feature adoption, prompt volume, reliability, latency, and user intent.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          <KpiCard label="Sessions" value={kpis.totalSessions.toLocaleString()} />
          <KpiCard label="Prompts" value={kpis.totalPrompts.toLocaleString()} />
          <KpiCard label="Success Rate" value={`${kpis.successRate}%`} />
          <KpiCard label="Avg Latency" value={`${kpis.avgLatency}s`} />
          <KpiCard label="Est. Cost" value={`$${kpis.estimatedCost}`} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <ChartPanel options={lineOptions} />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <ChartPanel options={donutOptions} />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">
            User Intent Distribution
          </h2>

          <div className="flex flex-wrap items-center gap-6">
            {intentData.map((item) => {
              const size = 60 + (item.count / maxCount) * 90;

              return (
                <div
                  key={item.intent}
                  className="flex flex-col items-center justify-center rounded-full bg-slate-900 text-center text-white shadow-md"
                  style={{ width: size, height: size }}
                >
                  <span className="px-3 text-sm font-semibold">{item.intent}</span>
                  <span className="text-xs opacity-80">{item.count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm">
      <dl>
        <dt className="text-sm text-slate-500">{label}</dt>
        <dd className="mt-2 text-2xl font-bold text-slate-900">{value}</dd>
      </dl>
    </article>
  );
}
