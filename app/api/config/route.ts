import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "config.json");

export async function GET() {
  try {
    const raw = readFileSync(DATA_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch (error) {
    console.error("Error reading config:", error);
    return NextResponse.json({ error: "Failed to read config" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Forbidden in production" }, { status: 403 });
  }
  try {
    const body = await req.json();
    writeFileSync(DATA_PATH, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error writing config:", error);
    return NextResponse.json({ error: "Failed to write config" }, { status: 500 });
  }
}
