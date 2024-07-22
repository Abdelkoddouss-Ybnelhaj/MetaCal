import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from "./pages/Home"
import CalorieCal from "./pages/CaloriesCal"
import Meals from "./pages/Meals"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/CalorieCal" element={<CalorieCal />}/>
          <Route path="/Meals" element={<Meals />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
