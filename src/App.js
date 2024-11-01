import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState();

  return (
    <>
      <TodoList />
      <input type="text" />
      <button>タスクを追加</button>
      <button>タスクの削除</button>
      <div> 残りのタスク:0</div>
    </>
  );
}

export default App;
