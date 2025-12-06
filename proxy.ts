import { NextResponse, NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const role = req.cookies.get("role")?.value;

    // 관리자가 아닌데 /admin 접근 시
    if (pathname.startsWith("/admin") && role !== "admin") {
        return NextResponse.redirect(new URL("/not-authorized", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
