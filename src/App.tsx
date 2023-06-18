/* eslint-disable react/jsx-no-undef */

import "./styles/App.css";
import "./styles/index.css";
import { Display } from "./components/Display";
function App() {
  return (
    <div className="App">
       <div className="flex justify-center items-center hidden">You won</div>
      <Display></Display>
    </div>
  );
}

export default App;
