"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function RevalidateButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleClick = async () => {
        await fetch("/api/revalidate-todo", {
            method: "POST",
        });

        // 서버 캐시가 깨졌으니, 새 데이터로 페이지를 다시 가져오도록
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isPending}
            className="px-3 py-2 text-sm rounded-lg border bg-slate-900 text-white disabled:opacity-50"
        >
            {isPending ? "갱신 중..." : "todo-1 캐시 갱신하기"}
        </button>
    );
}
