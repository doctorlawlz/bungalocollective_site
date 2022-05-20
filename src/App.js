import './App.css';
import background from "./Site_Assets/space.png"

const App = () => {
  return (
    <div className="App" 
      style={{ 
        backgroundImage: `url(${background})`,
        height: '100vh',
        width: '100%'
        }}>
    </div>
  );
}

export default App;
