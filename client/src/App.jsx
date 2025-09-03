import { useState } from "react";
import "./App.css";
import { ApplicationViews } from "./components/ApplicationViews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ApplicationViews />
    </>
  );
}

export default App;
