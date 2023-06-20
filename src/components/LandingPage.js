import '../App.css';
import Game from './Game';
import './lp.css';
// import bg from './twbb.jpg'

function LandingPage() {

  const bg = {
    backgroundImage: `url(${require('./twbb.jpg')})`,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundSize: "cover",
  }

  return (
    <div className='ir' style={bg}>
      <br/> <br/>
      <div className='text'>
        <span className='alignText'><h4>The</h4> <h1>higher or lower</h1> <h4>game</h4></span><br></br>
        <h3>Which is ranked higher in IMdB?</h3>
        <button id='play'>Play</button>
      </div>
    </div>
  );
}

export default LandingPage;
