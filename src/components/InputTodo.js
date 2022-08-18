import {useTodo} from "../Context/Todo-Context"

const InputTodo = () => {
  const {setTodo,todo,handleSubmit} = useTodo()

  return (
    <form className="w-[100%]" onSubmit={handleSubmit}>
      <input
        onChange={(e)=>setTodo(prev => ({...prev,text:e.target.value}))}
        value={todo.text}
        className="mt-4 px-2 py-1 w-[80%] block border-b-2 focus:outline-0" 
        type="text" 
        placeholder="enter todo here..."/>
        <button 
            className="my-2 cursor-pointer rounded-md bg-green-300 px-2 py-1">
            Save
        </button>
    </form>
  )
}

export default InputTodo