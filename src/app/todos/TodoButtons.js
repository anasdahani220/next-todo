'use client'

export function UpdateButton({ todoId, completed }) {
  async function updateTodo() {
    const response = await fetch(`/api/todos/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    })
    
    if (response.ok) {
      window.location.reload()
    }
  }

  return (
    <button
      onClick={updateTodo}
      className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-1 rounded text-sm transition-colors"
    >
      Update
    </button>
  )
}

export function DeleteButton({ todoId }) {
  async function deleteTodo() {
    if (confirm('Are you sure you want to delete this todo?')) {
      const response = await fetch(`/api/todos/${todoId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        window.location.reload()
      } else {
        alert('Failed to delete todo')
      }
    }
  }

  return (
    <button
      onClick={deleteTodo}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm transition-colors"
    >
      Delete
    </button>
  )
}