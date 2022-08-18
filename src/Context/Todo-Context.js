import {createContext,useState,useContext,useEffect} from "react"
import {v4 as uuid} from "uuid"

const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState({id:"",text:""})

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList(prev => [...prev,{...todo,id:uuid()}])
        setTodo({id:"",text:""})
    }
    
    const deleteTodo = (id) => setTodoList(items => items.filter(item => item.id !== id))

    useEffect(()=>{
        setTodoList(JSON.parse(localStorage.getItem("todos")))
    },[])

    useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList])

    return(
        <TodoContext.Provider value={{todoList,todo,setTodo,handleSubmit,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo = () => useContext(TodoContext)

export { TodoProvider, useTodo}