import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import InputSection from "./components/InputSection/InputSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <InputSection />
                </div>
              }
            />
            <Route
              path="/Text-Utils"
              element={
                <div>
                  <Navbar />
                  <InputSection />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <Navbar />
                  <About />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <h1>Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
