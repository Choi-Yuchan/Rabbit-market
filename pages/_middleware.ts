import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response("Get out. we don't permit to approach bot", {
      status: 403,
    });
  }
  // if (!req.url.includes("/api")) {
  //   if (!req.url.includes("/enter") && !req.cookies.rabbitsession) {
  //     return NextResponse.redirect("/enter");
  //   }
  // }
}
