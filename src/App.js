import "./styles.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Lotto from "./lotto/Lotto";

import Sample from "./sample/Sample";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/lotto" element={<Lotto />}></Route>
          {/* Sample */}
          <Route path="/sample" element={<Sample />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
