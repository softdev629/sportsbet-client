import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main";
import OneNews from "./pages/news/one";
import AllNews from "./pages/news/all";
import "./App.css";
import TemplateTSX from "./pages/news/template";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/news" element={<AllNews />} />
            <Route path="/news/:id" element={<OneNews />} />
            <Route path="/template" element={<TemplateTSX />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
