import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

export async function GET() {
  try {
    const raw = readFileSync(DATA_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch (error) {
    console.error("Error reading projects:", error);
    return NextResponse.json({ error: "Failed to read projects" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    writeFileSync(DATA_PATH, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error writing projects:", error);
    return NextResponse.json({ error: "Failed to write projects" }, { status: 500 });
  }
}
