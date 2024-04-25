import { NextRequest, NextResponse } from "next/server";

export const config = {
  marcher: ["((?!api/|_next/|_static/}[\\w-]+\\.\\w+)*)"],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host")!;
  const path = url.pathname;
  let subdomain = hostname.split(".")[0];
  subdomain = subdomain.replace("localhost:3000", "");
  subdomain = subdomain.replace("showdev.tech", "");
  if (subdomain === "www" || subdomain === "") {
    return NextResponse.next();
  }
  if (subdomain === "app" || subdomain === "pemodal") {
    return NextResponse.rewrite(new URL(`/pemodal/${path === "/" ? "" : path}`, req.url));
  } else if (subdomain === "app" || subdomain === "penerbit") {
    return NextResponse.rewrite(new URL(`/penerbit/${path === "/" ? "" : path}`, req.url));
  }
  return NextResponse.redirect(hostname);

  // ==========

  // return NextResponse.next();
}
