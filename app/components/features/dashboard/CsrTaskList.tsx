// components/features/dashboard/CsrTaskList.tsx
'use client'

import { useState } from 'react'

export type Task = {
  id: number
  title: string
  done: boolean
}

type CsrTaskListProps = {
  initialTasks: Task[]
}

export function CsrTaskList({ initialTasks }: CsrTaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTitle, setNewTitle] = useState('')

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )
  }

  const addTask = () => {
    const title = newTitle.trim()
    if (!title) return

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        done: false,
      },
    ])
    setNewTitle('')
  }

  return (
    <section className="p-4 border rounded-xl bg-white shadow-sm space-y-3">
      <header className="flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold">오늘 할 공부</h2>
        <span className="text-xs text-slate-400">
          완료 {tasks.filter((t) => t.done).length} / {tasks.length}
        </span>
      </header>

      <div className="flex gap-2">
        <input
          className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none focus:ring focus:ring-slate-200"
          placeholder="할 일을 추가하세요 (예: Day 9 SSR 실습)"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTask()
          }}
        />
        <button
          type="button"
          onClick={addTask}
          className="px-3 py-2 text-sm font-medium rounded-lg border bg-slate-900 text-white hover:bg-slate-800"
        >
          추가
        </button>
      </div>

      <ul className="space-y-1">
        {tasks.map((t) => (
          <li key={t.id} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(t.id)}
              className="h-4 w-4"
            />
            <span className={t.done ? 'line-through text-slate-400' : ''}>
              {t.title}
            </span>
          </li>
        ))}
        {tasks.length === 0 && (
          <li className="text-xs text-slate-400">
            아직 할 일이 없어요. 하나 추가해볼까요?
          </li>
        )}
      </ul>
    </section>
  )
}
