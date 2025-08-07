// Sample todos data - in a real app, this would come from a database
let todos = [
  {
    "id": "1",
    "title": "Todo 1", 
    "completed": false,
  },
  {
    "id": "2",
    "title": "Todo 2",
    "completed": true,
  }
]

export async function GET() {
  return Response.json(todos)
}

export async function POST(request) {
  const body = await request.json()
  const newTodo = {
    id: Date.now().toString(),
    title: body.title,
    completed: false
  }
  todos.push(newTodo)
  return Response.json(newTodo)
}