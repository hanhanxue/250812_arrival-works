import { getWorks } from "@/lib/works";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const works = await getWorks();
    return NextResponse.json(works);
  } catch (e) {
    console.error("getWorks failed:", e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}