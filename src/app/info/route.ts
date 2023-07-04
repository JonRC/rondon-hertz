import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const values = readFileSync('log.txt').toString().split('\n')

  return NextResponse.json({values})

}