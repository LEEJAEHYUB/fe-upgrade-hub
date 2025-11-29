import {
  CsrTaskList,
  type Task,
} from '../components/features/dashboard/CsrTaskList'

async function getInitialTasks(): Promise<Task[]> {
  // 여기서는 일단 서버에서 만드는 mock 데이터라고 생각하면 됨
  // 나중에 진짜 API(fetch, DB)로 바꿀 수 있음
  return [
    {
      id: 1,
      title: 'HTTP / 쿠키 / 캐싱 Day1~5 복습',
      done: false,
    },
    {
      id: 2,
      title: 'Next.js Day 8 — CSR 구조 복기',
      done: false,
    },
    {
      id: 3,
      title: 'Next.js Day 9 — SSR fetch 실습',
      done: false,
    },
  ]
}

export default async function DashboardPage() {
  const tasks = await getInitialTasks() // 서버에서 실행되는 부분
  console.log('tasks > ', tasks)

  return (
    <main className="min-h-screen p-8 space-y-6 bg-slate-50">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">FE Upgrade Hub</h1>
        <p className="text-sm text-slate-500">
          오늘 할 공부를 한눈에 정리하는 나만의 대시보드
        </p>
      </header>

      <section>
        {/* ⭐ 서버에서 가져온 tasks를 클라이언트 컴포넌트로 넘김 */}
        <CsrTaskList initialTasks={tasks} />

        <div className="p-4 border rounded-xl bg-white shadow-sm mt-10">
          <h2 className="text-base font-semibold mb-2">오늘 메모</h2>
          <p className="text-sm text-slate-500">
            Day 9 — 서버에서 초기 데이터를 주입하고, 이후 상호작용은 CSR로 처리
          </p>
        </div>
      </section>
    </main>
  )
}
