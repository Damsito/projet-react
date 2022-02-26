import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Match from "./pages/Match";
import Navbar from "./components/Navbar";
import Equipe from "./pages/Equipe";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <hr />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/equipes" element={<Equipe />} />
            <Route path="/match/:id" element={<Match />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
