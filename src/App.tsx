import { useState } from "react";
import Title from "./components/Title";

import './App.css';

function App() {
  const [open, isOpenedTitle] = useState(false);

  const handleOpen = () => {
    isOpenedTitle(true);
  };
  
  const handleClose = () => {
    isOpenedTitle(false);
  };

  if (open === true)   
      return (
        <div>
        <button onClick={handleClose}>Close title!</button>
        <Title name = "Application normalType" type = "normal"/>
        <Title name = "Application boldType" type = "bold"/>
        </div>
      );
    else
      return (
        <div>
        <button onClick={handleOpen}>Open title!</button>
        </div>
      );
}

export default App; 