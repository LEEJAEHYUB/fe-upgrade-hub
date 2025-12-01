// app/dashboard/isr-tag/page.tsx

import { RevalidateButton } from "@/app/components/features/dashboard/RevalidateButton";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

async function getTodo(): Promise<{
    todo: Todo;
    random: number;
    time: string;
}> {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
            next: {
                tags: ["todo-1"], // ⭐ 이 태그 기준으로 revalidateTag가 동작
            },
        },
    );

    const todo = (await res.json()) as Todo;

    return {
        todo,
        random: Math.random(), // 캐시가 깨졌는지 확인용
        time: new Date().toISOString(),
    };
}

export default async function IsrTagPage() {
    const { todo, random, time } = await getTodo();

    return (
        <main className="min-h-screen p-8 space-y-4">
            <h1 className="text-2xl font-bold">Tag-based Revalidate Example</h1>

            <p className="text-sm text-slate-500">
                이 페이지는 <code>todo-1</code> 태그로 캐싱된 데이터를 사용합니다.
            </p>

            <div className="text-xs text-slate-500 space-y-1">
                <p>서버 시간: {time}</p>
                <p>랜덤 값: {random}</p>
            </div>

            <pre className="bg-slate-100 p-4 rounded text-sm">
                {JSON.stringify(todo, null, 2)}
            </pre>

            <RevalidateButton />
        </main>
    );
}
