import { MdCheck , MdDeleteForever} from "react-icons/md";
export const TodoList = ({ data,checked, handleDeleteTodo,handleCheckedTodo}) => {
    return(
        <li  className="todo-item">
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => handleCheckedTodo(data)}><MdCheck />
        </button>
        <button className="delete-btn" onClick={() => handleDeleteTodo(data)}><MdDeleteForever />
        </button>
    </li>
    )
}