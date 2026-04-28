import { NextResponse } from "next/server";
import { kpis, usageTrend, statusData, intentData } from "@/src/data/aiMetrics";

export async function GET() {
  return NextResponse.json({
    kpis,
    usageTrend,
    statusData,
    intentData,
  });
}