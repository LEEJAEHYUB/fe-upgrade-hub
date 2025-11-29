import { CsrTaskList } from '../components/features/dashboard/CsrTaskList'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <header>
        <h1>FE Upgrade HUB</h1>
      </header>

      <section>
        <div className="mb-3">Client Component</div>
        <CsrTaskList />
      </section>
    </main>
  )
}
