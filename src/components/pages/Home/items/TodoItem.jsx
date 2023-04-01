import React from 'react';
import Check from './Check';
import {RxCrossCircled} from 'react-icons/rx'


const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return ( 
        <div className='flex items-center justify-between mb-3 rounded-2xl bg-slate-800 p-3 w-full'
        >
            <button className='flex items-center'
            onClick={()=> changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span className={`${todo.isCompleted ? 'line-through'  : ''}`}>{todo.title}</span>
            </button>
            <button
            onClick={()=> removeTodo(todo._id)}>
                <RxCrossCircled 
                size={32} 
                className='text-gray-500 hover:text-rose-500 transition-colors ease-in-out duration-300'/>
            </button>
        </div>
     );
}
 
export default TodoItem;