
import "./App.css";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Match from "./pages/Match";

function App() {
  return (
      <BrowserRouter>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
            </ul>
          </nav>
          <hr />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path='/match/:id' element={<Match />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
