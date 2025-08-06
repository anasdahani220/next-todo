export async function GET() {
  // Sample todos data - in a real app, this would come from a database
  const todos = [
    {
      "id": "1",
      "title": "Todo 1", 
      "completed": "false"
    },
    {
      "id": "2",
      "title": "Todo 2",
      "completed": "true"
    }
  ]
  
  return Response.json(todos)
}