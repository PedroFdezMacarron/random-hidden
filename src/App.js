import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <Router>
      <div className="App-header">
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/games" element={<GamePage></GamePage>} />          
        </Routes>
        <footer className="footer">2023  -- Random hidden -- by Pedro Fernández Macarrón (c)</footer>
      </div>
    </Router>
  );
}

export default App;



