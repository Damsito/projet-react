import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Match from "./pages/Match";
import Navbar from "./components/Navbar";
import Equipe from "./pages/Equipe";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
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
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
