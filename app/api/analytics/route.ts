import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "analytics.json");

export async function GET() {
  try {
    const raw = readFileSync(DATA_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ visits: 0, cardClicks: {} });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const raw = readFileSync(DATA_PATH, "utf-8");
    const data = JSON.parse(raw);

    if (body.type === "visit") {
      data.visits = (data.visits || 0) + 1;
    } else if (body.projectId) {
      data.cardClicks = data.cardClicks || {};
      data.cardClicks[body.projectId] = (data.cardClicks[body.projectId] || 0) + 1;
    }

    writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
