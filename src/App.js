import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4} from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    //nameはtextboxに入れたれた名前をRefで得る
    const name = todoNameRef.current.value;
    if (name ==="") return;
    //setTodosの中のprevTodos(前のタスク)を更新する
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]

    });
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo  = newTodos.find((todo) => todo.id ===id);   //ここでのidは引数
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () =>{
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
      <input type="text" ref = {todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>タスクの削除</button>
      <div> 残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
