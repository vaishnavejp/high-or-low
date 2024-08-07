import { useState } from 'react';
import '../App.css';
import Game from './Game';
import './lp.css';

function LandingPage(props) {

  const[press, setPress] = useState(false)

  const bg = {
    backgroundImage: `url(${require('./assets/bg.jpg')})`,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundSize: "cover",
  }

  function handlePlay() {
    console.log(press);
    setPress(true)
  }

  if(press === true) {
    console.log('vaish')
    return (
      <Game />
    )
  }

  else if(props.score == '-1' ) {
    return (
      <div className='ir' style={bg}>
        <br/> <br/>
        <div className='text'>
          <h4>The</h4> <h1>higher or lower</h1> <h4>game</h4><br></br>
          <h3>Which is ranked higher in IMdB?</h3>
          <button id='play' onClick={handlePlay}>Play</button>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className='ir' style={bg}>
      <br/> <br/>
        <div className='text'>
          <h4>The</h4> <h1>higher or lower</h1> <h4>game</h4><br></br>
          <h3>Which is ranked higher in IMdB?</h3> <br /><br /><br />
          Final Score : {props.score}<br></br>
          High Score : {localStorage.getItem('topScore')}<br></br>
          <button id='play' onClick={handlePlay}>Play Again</button>
        </div>
      </div>
    )
  }

}

export default LandingPage;
