import {useTodo} from "../Context/Todo-Context"
import { FaTrashAlt } from "react-icons/fa";

const Todos = () => {
    const {todoList,deleteTodo} = useTodo()
  return (
    <>
      {
        todoList.length > 0 ?
        <ul>
        {todoList.map(({id,text}) => (
            <li className="w-[50%] flex justify-between border-b-2 border-slate-600 px-2 py-1 my-2"
                key={id}>
                <p className="text-xl">
                    {text}
                </p>
                <button onClick={()=>deleteTodo(id)}>
                    <FaTrashAlt/>
                </button>
            </li>
        ))}
    </ul> :
        <p className="text-xl">
            No more todos
        </p>
      }
    </>
  )
}

export default Todos