// app/dashboard/rsc-client/page.tsx
"use client";

import { useEffect, useState } from "react";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export default function RscClientPage() {
    const [data, setData] = useState<Todo | null>(null);
    const [clientTime, setClientTime] = useState<string>(
        new Date().toISOString(),
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 클라이언트(브라우저)에서 fetch 실행
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((json: Todo) => {
                setData(json);
                setLoading(false);
            });
    }, []);

    return (
        <main className="min-h-screen p-8 space-y-4">
            <h1 className="text-2xl font-bold">Client Component Example</h1>

            <p className="text-sm text-slate-600">
                이 페이지는 <strong>브라우저에서</strong> 데이터 fetch를 실행합니다.
            </p>

            <p className="text-xs text-slate-500">
                클라이언트 실행 시간: {clientTime}
            </p>

            {loading && <p className="text-sm text-slate-500">불러오는 중...</p>}

            {data && (
                <pre className="bg-slate-100 p-4 rounded text-sm">
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </main>
    );
}
