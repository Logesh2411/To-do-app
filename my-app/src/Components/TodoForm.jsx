import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import './Styles/TodoForm.scss'

const TodoForm = ({addTodo}) =>
    { 
        const [value,setValue] = useState("");

        const handleSubmit = e => {
            e.preventDefault();
            addTodo(value);
            setValue("")
        }

        return(
            <>
                <form className="todoForm"
                    onSubmit={handleSubmit}>
                    <input type="text" 
                    placeholder="What are the task today?" 
                    className="todo-input"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    />
                    
                    <button type="submit" className="todo-btn">
                        <FontAwesomeIcon icon={faAdd} className="faAdd" />
                    </button>
                </form>
            </>
        )
    }

    export  default TodoForm;