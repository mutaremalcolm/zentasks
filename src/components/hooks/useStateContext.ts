import { useContext } from 'react'

import { TodoStateContext } from '../../providers/ToDoContext';

export const useTodoStateContext = () => {
    const context = useContext(TodoStateContext)
    if (context === undefined) {
        throw new Error('useStateContext must be used within a TodoProvider')
    }
    return context
}