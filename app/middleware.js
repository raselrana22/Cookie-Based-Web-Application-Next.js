import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export function middleware(request) {
    console.log("Im middleware");
}

// export const config = {
//     matcher: ['/ home /: path *', '/ about /: path*', '/ profile /: path*'],
// }