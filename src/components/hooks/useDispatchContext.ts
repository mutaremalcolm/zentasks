import { useContext } from "react";

import { TodoDispatchContext } from '../../providers/ToDoContext'

export const useTodoDispatchContext = () => {
    const context = useContext(TodoDispatchContext)
    if (context === undefined) {
        throw new Error('useDispatchContext must be used within a TodoProvider')
    }
    return context
}