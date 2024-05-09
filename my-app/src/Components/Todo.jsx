import React from "react";
import './Styles/Todo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) =>{
    return (
        <div className="Todo">
            <span onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' :""}`}>{task.task}</span>
            <div className="icon-btn">
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)} />
            </div>
            <div className="icon-bt">
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
            </div>
        </div>
    )
}