import { useState } from 'react';
import '../App.css';
import Game from './Game';
import './lp.css';
// import bg from './twbb.jpg'

function LandingPage(props) {

  console.log('hi' + props.score)

  const[press, setPress] = useState(0)

  const bg = {
    backgroundImage: `url(${require('./twbb.jpg')})`,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundSize: "cover",
  }

  function handlePlay() {
    console.log(press);
    setPress(1)
  }

  if(press === 1) {
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
        <span className='alignText'><h4>The</h4> <h1>higher or lower</h1> <h4>game</h4></span><br></br>
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
        <span className='alignText'><h4>The</h4> <h1>higher or lower</h1> <h4>game</h4></span><br></br>
        <h3>Which is ranked higher in IMdB?</h3> <br /><br /><br />
        <span className='alignText'>Final Score : {props.score}</span><br></br>
        <button id='play' onClick={handlePlay}>Play Again</button>
      </div>
    </div>
    )
  }

}

export default LandingPage;
