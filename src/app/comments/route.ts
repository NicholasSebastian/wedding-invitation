import getInstance from "@/app/database";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const pool = getInstance();
    const response = await pool.query("SELECT * FROM comments");
    return NextResponse.json({ success: true, payload: response.rows });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, comments } = await request.json();
    const pool = getInstance();
    await pool.query("INSERT INTO comments(name, comment) VALUES ($1, $2)", [name, comments]);
    return NextResponse.json({ success: true });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
