import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cache } from "react"

export default async function Todo() {
  const data = await fetch('http://localhost:3000/db.json', {
    cache: "no-store",
  })
  
  const result = await data.json();
  const todos = result.todos;
  return (
    <main className="container">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="ps-3">
                    {todo.title}
                  </div>
                </th>
                <td className="px-6 py-4">
                  {todo.completed ? "Completed" : "Pending"}
                </td>
                <td className="px-6 py-4">
                  <Button variant="destructive">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}