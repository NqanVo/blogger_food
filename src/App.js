import { Routes, Route } from "react-router-dom";
import DetailPost from "./pages/DetailPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/asian"></Route>
      <Route path="/india"></Route>
      <Route path="/chinese"></Route>
      <Route path="/blog"></Route>
      <Route path="/post/:id" element={<DetailPost />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/*"></Route>
    </Routes>
  );
}

export default App;
