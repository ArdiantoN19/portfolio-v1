import { useState } from "react";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="h-screen w-full">
      <div className="max-w-screen-xl mx-auto">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
