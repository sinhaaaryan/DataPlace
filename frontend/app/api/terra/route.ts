import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json()
    // console.log("CHECK HEADER SECRET",resp);
    // Handle data here
    console.log(data)
    return NextResponse.json({ data: data }, { status: 200}); 
}