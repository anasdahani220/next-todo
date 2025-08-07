import { UpdateButton, DeleteButton } from './TodoButtons'

export default async function TodosPage() {
  // Fetch todos from API
  const response = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store' // Ensure fresh data on each page load
  })
  
  if (!response.ok) {
    return <div>Error loading todos</div>
  }
  
  const todos = await response.json()

  return (
    <main className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Todos</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 font-medium text-gray-700 border-b">
          <div>NAME</div>
          <div>STATUS</div>
          <div>ACTION</div>
        </div>
        
        {todos.map((todo) => (
          <div key={todo.id} className="grid grid-cols-3 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
            <div className="font-medium">{todo.title}</div>
            <div className="flex items-center">
              {todo.completed ? (
                <span className="flex items-center text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Completed
                </span>
              ) : (
                <span className="flex items-center text-red-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Incomplete
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <UpdateButton todoId={todo.id} completed={todo.completed} />
              <DeleteButton todoId={todo.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}