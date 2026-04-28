import { NextResponse } from "next/server";
import { intentData, kpis, statusData, usageTrend } from "@/src/data/aiMetrics";

export async function GET() {
  return NextResponse.json({
    kpis,
    usageTrend,
    statusData,
    intentData,
  });
}
