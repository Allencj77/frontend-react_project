import Topbar from "./components/topbar/Topbar";
import Home from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  const user = false;
  return (
    <div>
      <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/register" element={user ? <Home /> : <Register />}/>
          
        
        <Route path="/login" element={user ? <Home/> : <Login />}/>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
        <Route path="/write" element={user ? <Write/> : <Register />}/>
        <Route path="/post/:postId" element={<Single/>}/>
       
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
