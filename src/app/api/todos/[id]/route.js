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

export async function GET(request, { params }) {
  const todo = todos.find(t => t.id === params.id)
  if (!todo) {
    return new Response('Todo not found', { status: 404 })
  }
  return Response.json(todo)
}

export async function PUT(request, { params }) {
  const body = await request.json()
  const todoIndex = todos.findIndex(t => t.id === params.id)
  
  if (todoIndex === -1) {
    return new Response('Todo not found', { status: 404 })
  }
  
  todos[todoIndex] = { ...todos[todoIndex], ...body }
  return Response.json(todos[todoIndex])
}

export async function DELETE(request, { params }) {
  const todoIndex = todos.findIndex(t => t.id === params.id)
  
  if (todoIndex === -1) {
    return new Response('Todo not found', { status: 404 })
  }
  
  const deletedTodo = todos.splice(todoIndex, 1)[0]
  return Response.json({ message: 'Todo deleted successfully', todo: deletedTodo })
}