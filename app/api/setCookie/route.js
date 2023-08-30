import { NextResponse } from 'next/server';

export async function GET(req) {
    const userPreference = req.cookies.get('user_preference');
    console.log(userPreference);

    return NextResponse.json({ userPreference: userPreference });
}
