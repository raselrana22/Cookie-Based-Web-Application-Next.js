// This is return auth message if token is true 
import { NextResponse } from "next/server"

export async function GET(request) {
    const headerList = request.headers;
    const mofidiedheader = headerList.get('Authorization')

    return NextResponse.json({
        "message": mofidiedheader,
    })
}