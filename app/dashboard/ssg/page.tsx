// app/dashboard/ssg/page.tsx

export const revalidate = false; // ← 이게 핵심: 이 페이지는 빌드 타임에만 생성됨 (SSG 고정)

export default async function SsgPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-4">SSG Example</h1>

      <p className="mb-4 text-slate-500">
        이 페이지는 <strong>빌드 시점</strong>에 생성된 HTML입니다.
      </p>

      <pre className="p-4 bg-slate-100 rounded-xl text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
