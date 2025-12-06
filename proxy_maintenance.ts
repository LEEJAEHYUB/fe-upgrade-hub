import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 예: 유지보수 모드 on/off 플래그
const MAINTENANCE_MODE = true;

export function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    // 유지보수 모드일 때 모든 요청 rewrite
    if (MAINTENANCE_MODE && !pathname.startsWith("/maintenance")) {
        return NextResponse.rewrite(
            new URL("/maintenance", req.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"],
};
