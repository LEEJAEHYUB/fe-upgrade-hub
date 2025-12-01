// app/api/revalidate-todo/route.ts

import { revalidateTag } from 'next/cache'

export async function POST() {
  // ⭐ 이 호출로 "todo-1" 태그와 연결된 캐시를 무효화
  revalidateTag('todo-1')

  return Response.json({
    revalidated: true,
    now: new Date().toISOString(),
  })
}
