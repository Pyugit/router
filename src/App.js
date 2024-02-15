import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Dashboard from "./components/pages/Dashboard";
import Post from "./components/pages/Post";
import Navbar from "./components/Navbar";
function App() {
  let isLogged = true;
  let data = {
    'kl': "user is not logged in",
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<h1>hello react router</h1>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/post/:category" element={<Post />} />
          <Route path="/post/:category/:id" element={<Post />} />
          <Route path="*" element={<h1>Error 404 page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
