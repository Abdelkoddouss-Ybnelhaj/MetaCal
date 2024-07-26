import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from "./pages/Home"
import CalorieCal from "./pages/CaloriesCal"
import Meals from "./pages/Meals"
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";

function App() {
  return (  
    <div className="lg:px-40 md:px-20 px-14 bg-bg_color h-screen ">
      <UserProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Calories" element={<CalorieCal />}/>
            <Route path="/Meals" element={<Meals />}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
