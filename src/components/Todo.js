import InputTodo from "./InputTodo"
import Title from "./Title"
import Todos from "./Todos"

const Todo = () => {
  return (
    <div className="w-[80%] mx-auto my-10"> 
      <Title/>
      <InputTodo/>
      <Todos/>
    </div>
  )
}

export default Todo