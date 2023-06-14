
import './styles/App.css';
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import sombra from './imgs/sombra.png'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Card src={sombra}></Card>
     
    </div>
  );
}

export default App;
