import { Routes, Route } from "react-router-dom";
import DetailPost from "./pages/DetailPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'react-notifications/lib/notifications.css';
import Information from "./pages/Information";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/asian"></Route>
      <Route path="/india"></Route>
      <Route path="/chinese"></Route>
      <Route path="/blog"></Route>
      <Route path="/post/:id" element={<DetailPost />}></Route>

      <Route path="/information" element={<Information />}></Route>
      <Route path="/create-post" element={<CreatePost />}></Route>
      <Route path="/update-post/:id" element={<UpdatePost />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/*"></Route>
    </Routes>
  );
}

export default App;
