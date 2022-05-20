import './App.css';
import background from "./Site_Assets/space.png"
import spinningBrick from "./Site_Assets/Spinning_Brick.webm"

const App = () => {
  return (
    <div className="background">
      <video src={spinningBrick} width="600" height="300" controls="controls" autoplay="true" />
    </div>
  );
}

export default App;
