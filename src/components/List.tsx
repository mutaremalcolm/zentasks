import { Item } from './item';
import { useTodoStateContext } from './hooks/useStateContext';

export const List = () => {
    const state = useTodoStateContext()

    return (
        <ul className='empty:hidden flex flex-col w-[90%] gap-6'>
            {state.todos.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </ul>
    )
}