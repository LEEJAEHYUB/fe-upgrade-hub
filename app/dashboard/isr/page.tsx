// app/dashboard/isr/page.tsx

export const revalidate = 5;
// 5초마다 재생성될 수 있는 ISR 페이지

export default async function IsrPage() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
            next: { revalidate: 5 }, // fetch도 5초마다 갱신 가능
        }
    );

    const data = await res.json();

    return (
        <main className="min-h-screen p-8 space-y-4">
            <h1 className="text-2xl font-bold">ISR Example</h1>

            <p className="text-sm text-slate-500">
                이 페이지는 5초마다 백그라운드에서 새로운 HTML로 재생성됩니다.
            </p>

            {/* 매번 현재 시각을 삽입해서 HTML이 바뀌는지 확인할 예정 */}
            <h1 className="text-red-500">
                현재 서버 시간: {new Date().toISOString()}
            </h1>

            <pre className="bg-slate-100 p-4 rounded text-sm">
                {JSON.stringify(data, null, 2)}
            </pre>
        </main >
    );
}
