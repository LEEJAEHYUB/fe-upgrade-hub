export default async function SsrPage() {
  // 서버 컴포넌트에서 fetch 실행
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-4">SSR fetch Example</h1>

      <pre className="p-4 bg-slate-100 rounded-lg text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}
