import { useState} from "react";
import './App.css';
import StartScreen from './StartScreen';
import QuizScreen from "./QuizScreen";

function App() {
  const [status, setStatus] = useState("ready");

  return (
    <div className="App">

      {status === "ready" && <StartScreen onStart={() => setStatus("active")}/>}
      {status === "active" && <QuizScreen />}
    </div>
  );
}

export default App;
