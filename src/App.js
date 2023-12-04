import React from "react";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
function App() {
  return (
    <div className='flex flex-col bg-[#0d1f2b] h-screen' >
      <Nav />
      <Home />
    </div>
  );
}

export default App;
