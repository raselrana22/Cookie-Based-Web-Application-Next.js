// This is return redirection to home page

import { NextResponse } from 'next/server';

export async function GET(req, res) {
    return NextResponse.redirect('http://localhost:3000/');

}
