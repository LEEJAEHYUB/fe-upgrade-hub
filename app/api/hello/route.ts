// app/api/hello/route.ts

export async function GET() {
  return Response.json({
    message: 'Hello Route Handler!',
    time: new Date().toISOString(),
  })
}
