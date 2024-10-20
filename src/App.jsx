// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Thankyou from "./pages/Thankyou";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
