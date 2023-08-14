import Navbar from "./componets/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
   <Router>
     <Navbar/>
     <Routes>
      <Route  path='/'  element={<Home/>}  />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about"  element={<About/>}/>
     </Routes>

   </Router>
    </div>
  );
}

export default App;
