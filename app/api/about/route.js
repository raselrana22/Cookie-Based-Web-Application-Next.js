// This is return about this website
import { NextResponse } from "next/server"

export async function GET(request) {

    return NextResponse.json({
        "message": "Welcome to our API!",
        "version": "1.0"
    })
}