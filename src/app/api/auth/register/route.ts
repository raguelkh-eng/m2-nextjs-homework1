import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json({ message: "Registration successful", user: body });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
