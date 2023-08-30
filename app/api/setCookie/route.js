import { NextResponse } from 'next/server';

export async function GET(req) {
    const userPreference = req.cookies.get('theme');
    console.log(userPreference);

    return NextResponse.json({ theme: userPreference });
}