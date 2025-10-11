import { getSessionCookie } from "better-auth/cookies";

import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  if (sessionCookie && !isDashboard) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
