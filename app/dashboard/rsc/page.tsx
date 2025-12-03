// app/dashboard/rsc/page.tsx

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return {
        data,
        serverTime: new Date().toISOString(),
    };
}

export default async function RscPage() {
    const { data, serverTime } = await getData();

    return (
        <main className="min-h-screen p-8 space-y-4">
            <h1 className="text-2xl font-bold">RSC Example (Server Component)</h1>

            <p className="text-sm text-slate-600">
                이 페이지는 <strong>서버에서만</strong> 렌더링됩니다.
            </p>

            <p className="text-xs text-slate-500">
                서버 실행 시간: {serverTime}
            </p>

            <pre className="bg-slate-100 p-4 rounded text-sm">
                {JSON.stringify(data, null, 2)}
            </pre>
        </main>
    );
}
