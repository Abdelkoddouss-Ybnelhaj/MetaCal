import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from "./pages/Home"
import CalorieCal from "./pages/CaloriesCal"
import Meals from "./pages/Meals"
import NavBar from "./components/NavBar";

function App() {
  return (  
    <div className="px-40">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Calories" element={<CalorieCal />}/>
          <Route path="/Meals" element={<Meals />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
