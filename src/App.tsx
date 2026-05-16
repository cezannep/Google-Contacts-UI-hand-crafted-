import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Keyboard from "./Components/Pages/Keyboard/Keyboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Keyboard />} path="/keypad" />
      </Routes>
    </>
  );
}

export default App;
