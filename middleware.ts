import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="ICONZ Prototype"',
    },
  });
}

export function middleware(req: NextRequest) {
  // Allow Next.js internals and static assets
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;

  // If env vars are missing, do not block locally by accident
  if (!user || !pass) return NextResponse.next();

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return unauthorized();

  const base64 = authHeader.slice("Basic ".length);
  const decoded = Buffer.from(base64, "base64").toString("utf8");
  const [inputUser, inputPass] = decoded.split(":");

  if (inputUser !== user || inputPass !== pass) return unauthorized();

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
