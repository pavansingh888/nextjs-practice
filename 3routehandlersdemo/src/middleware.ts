// navigating to the /profile should redirect to the home page "/"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//get response object that will eventually return from the middleware
const response = NextResponse.next();
const themePreference = request.cookies.get("theme");
if(!themePreference) {
    response.cookies.set("theme", "dark");
}

response.headers.set("x-custom-header", "my-custom-value");
return response;



    // return NextResponse.redirect(new URL("/", request.url));
    // if(request.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/hello", request.url));
    // }
}

// export const config = {
//     matcher: "/profile"
// }