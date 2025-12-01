// app/dashboard/ssg/[id]/page.tsx

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const revalidate = false;

export default async function SsgDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // ✅ Promise 풀기
    const { id } = await params;

    // 이제 id는 string
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    const data = await res.json();

    return (
        <main className="min-h-screen p-10">
            <h1 className="text-2xl font-bold mb-4">SSG Detail Page</h1>

            <p className="mb-4 text-slate-500">
                <strong>ID {id}</strong> 페이지는 빌드 시 생성되었습니다.
            </p>

            <pre className="p-4 bg-slate-100 rounded-xl text-sm">
                {JSON.stringify(data, null, 2)}
            </pre>
        </main>
    );
}
