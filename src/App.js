import { Routes, Route } from "react-router-dom"
import Login from "./Admin/Login/Login";
import Register from "./Admin/register/Register";
import Todo from "./Client/pages/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="todo" element={<Todo></Todo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
