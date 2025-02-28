import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest): NextResponse | undefined {
  const url = req.nextUrl.clone();

  if (url.hostname === "openauburn.org") {
    url.hostname = "www.openauburn.org";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
