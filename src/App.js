import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Chat from "./pages/chat/chat";
import Requests from "./pages/requests/requests";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
   
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Chat" element={<Chat/>} />
   <Route path="/Requests" element={<Requests/>} />
   <Route path="/Profile" element={<Profile />} />
   <Route path="/Login" element={<Login/>} />
   <Route path="/Register" element={<Register/>} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
