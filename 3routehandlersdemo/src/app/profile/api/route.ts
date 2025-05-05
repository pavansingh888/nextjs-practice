import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  // Use the headers web API to extract the request headers
  // const requestHeaders = new Headers(request.headers);
  //use get() to get the value of the header
  // console.log(requestHeaders.get("authorization"));

  const headersList = await headers();
  console.log(headersList.get("authorization"));
  
  //reading the cookie from the request
  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
    console.log(cookieStore.get("resultsPerPage"));
  cookieStore.set("resultsPerPage", "10");


  return new Response('<h1>Profile route handler</h1>', {
    headers: {
      "Content-Type": "text/html",
      "set-cookie": "theme=dark"
    }
  });
}