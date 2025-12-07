import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Todo | Hyobi',
  description: "Hyobi's Next.js Todo Dashboard using Route Handler + RSC",

  openGraph: {
    title: 'Dashboard Todo | Hyobi',
    description: 'Next.js 풀스택 Todo 대시보드',
    url: 'https://example.com/dashboard/todo',
    siteName: 'Hyobi Dev',
    images: [
      {
        url: 'https://example.com/og-dashboard.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard Todo | Hyobi',
    description: 'Next.js 풀스택 Todo 대시보드',
    images: ['https://example.com/og-dashboard.png'],
  },
};

async function getTodos(): Promise<Todo[]> {
  // 서버에서 서버로 fetch (Route Handler 호출)
  const res = await fetch('http://localhost:3000/api/todo', {
    // 캐시 없이 항상 최신 값 보고 싶으면
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Todos!');
  }

  const json = await res.json();
  return json.todos as Todo[];
}

export default async function DashboardTodoPage() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen p-8 space-y-4">
      <h1 className="text-2xl font-bold">
        Dashboard Todo (Server + Route Handler)
      </h1>

      <p className="text-sm text-slate-600">
        이 페이지는 <strong>Server Component</strong>에서
        <code> /api/todo </code> Route Handler를 호출해서 데이터를 가져옵니다.
      </p>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="text-sm flex gap-2 items-center border-2 border-yellow-950 p-2 rounded-sm max-w-100  shadow-sm shadow-neutral-600"
          >
            <span
              className={
                todo.completed
                  ? 'line-through text-slate-400'
                  : 'text-slate-800'
              }
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-sm text-slate-400">할 일이 없습니다.</p>
      )}
    </main>
  );
}
