import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const getTotalMemory = async () => {
    const res = await axios.get("http://localhost:5000/total-memory");
    setResult(res.data.totalMemory);
  };

  const getFreeMemory = async () => {
    const res = await axios.get("http://localhost:5000/free-memory");
    setResult(res.data.freeMemory);
  };

  const createFile = async () => {
    const res = await axios.post("http://localhost:5000/create-file");
    setResult(res.data.message);
  };

  const copyFile = async () => {
    const res = await axios.post("http://localhost:5000/copy-file");
    setResult(res.data.message);
  };

  return (
    <div>
      <nav className="navbar">Memory App</nav>

      <div className="buttons">
        <button onClick={getTotalMemory}>Total Memory</button>
        <button onClick={getFreeMemory}>Free Memory</button>
        <button onClick={createFile}>Create File</button>
        <button onClick={copyFile}>Copy File</button>
      </div>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
