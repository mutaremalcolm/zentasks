import { useEffect } from 'react'

import { FormInput, Header } from './components'
import { useTodoDispatchContext } from './components/hooks/useDispatchContext.ts'
import { List } from './components/List.tsx'
import { TODO_LOCAL_STORAGE_KEY } from './lib/constants.ts'
import { todoSchema } from './schemas/todos.ts'

function App() {
  const dispatch = useTodoDispatchContext()

  useEffect(() => {
    const todos = localStorage.getItem(TODO_LOCAL_STORAGE_KEY)

    if (todos) {
      dispatch({
        type: 'SET_TODOS',
        payload: { todos: todoSchema.array().parse(JSON.parse(todos)) },
      })
    }
  }, [dispatch])

  return (
    <main className='h-full w-[600px] flex flex-col items-center pt-20 gap-12'>
      <Header />
      <FormInput />
      <List />
    </main>
  )
}

export default App
