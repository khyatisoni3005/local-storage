import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import More from "./pages/More"
import Navbar from "./headers/Navbar";


function App() {
  return (
    <>

      <Navbar />
      <Routes>

        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/More" element={<More />} />

      </Routes>

    </>
  );
}

export default App;
