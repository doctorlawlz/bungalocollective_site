import './App.css';
import background from "./Site_Assets/space.png"

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}

export default App;
