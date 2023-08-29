// This is return auth message if token is true 
import { NextResponse } from "next/server"

export async function GET(request) {
    const language = request.cookies.get('language')

    console.log(language);

    // return NextResponse.json({
    //     "message": language,
    // })
    const response = NextResponse.next({
        request: {
            ...request,
            cookies: {
                ...request.cookies,
                language: 'en' // Set the "language" cookie value
            }
        }
    });
    return response;

}