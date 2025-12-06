let todos = [
    { id: 1, title: "Learn Next.js", completed: false },
    { id: 2, title: "Practice API Routes", completed: false },
]

export async function GET() {
    return Response.json({ todos, count: todos.length, time: new Date().toISOString() })
}

export async function POST(req: Request) {
    const body = await req.json();

    if (!body.title) {
        return Response.json(
            {
                error: "Title is required!"
            },
            {
                status: 400
            }
        )
    }

    const newTodo = {
        id: Date.now(),
        title: body.title,
        completed: false,
    }

    todos.push(newTodo)

    return Response.json({
        message: "Todo created",
        todo: newTodo,
    })
}

