import './App.css';
import background from "./Site_Assets/space.png"
import spinningBrick from "./Site_Assets/Spinning_Brick.webm"

const App = () => {
  return (
 
    <React.Fragment>
    <div className="background"></div>
      <video src={spinningBrick} width="600" height="300" controls="controls" autoplay="true" />
    <NavButton label="BRICK BY BRICK" />
  </React.Fragment>  );
}

export default App;
