import { NextResponse } from "next/server";

export function middleware(request, response) {
    if (request.nextUrl.pathname.startsWith('/api/auth')) {

        const headerList = request.headers;
        const incomingAuthorizationHeader = headerList.get('authorization');

        if (incomingAuthorizationHeader) {
            // Prefix the token with "Bearer "
            const modifiedAuthorizationHeader = `Bearer ${incomingAuthorizationHeader}`;

            // Clone the original request headers and update the "Authorization" header
            const newHeaders = new Headers(request.headers);
            newHeaders.set('Authorization', modifiedAuthorizationHeader);

            return NextResponse.next({
                request: { headers: newHeaders }
            });
        } else {
            return NextResponse.json({
                "message": 'Authorization header missing'
            });
        }
    }
    return NextResponse.next();
}