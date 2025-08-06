import { cache } from "react"

export default async function Todo() {
  let todos = []
  let error = null

  try {
    // Use the correct localhost URL for Next.js (port 3000, not 3001)
    // And use the API route pattern for Next.js
    const data = await fetch('http://localhost:3000/api/todos', {
      cache: "no-store",
    })
    
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`)
    }
    
    todos = await data.json()
  } catch (fetchError) {
    console.error('Fetch failed:', fetchError)
    error = fetchError.message
    // Fallback data for development
    todos = [
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
  }

  return (
    <main className="container">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <strong className="font-medium">API Error:</strong> {error}
            <br />
            <small>Using fallback data for demonstration.</small>
          </div>
        )}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="ps-3">
                    {todo.title}
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full me-2 ${todo.completed === "true" ? "bg-green-500" : "bg-red-500"}`}></div>
                    {todo.completed === "true" ? "Completed" : "Pending"}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}