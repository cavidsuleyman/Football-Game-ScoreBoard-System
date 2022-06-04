import React, { useContext, useState } from 'react';
import './style.css';
import {ScoreGame} from '../../Context';

const GameAdd = () => {
  let {score,dispatch,teams} = useContext(ScoreGame);
  const [hometeam,setHometeam] = useState(teams[0].name);
  const [awayteam,setAwayteam] = useState(teams[1].name);

  const add = (e) => {
      e.preventDefault();
      let data={
        id: score.length+1,
        hometeam: e.target.hometeam.value,
        hometeamscore: 0,
        awayteam: e.target.awayteam.value,
        awayteamscore: 0,
        status: true
      };
       dispatch({type:"ADD",value:data});
      setHometeam(teams[0].name);
      setAwayteam(teams[1].name);
  } 

  const homeChange = (e) => {
     setHometeam(e.target.value);
  }
  const awayChange = (e) => {
    setAwayteam(e.target.value);
 }

  return (

        <form onSubmit={add} align='center'>
            <h2>Add New Game</h2>
            <label htmlFor="home">Home Team</label> 
            <select value={hometeam} onChange={homeChange} id='home' name="hometeam">
                {
                  teams.map((v,i)=> <option disabled={v.name===awayteam}  key={"hometeam"+i}>{v.name}</option>)
                }
            </select>
            <label htmlFor="away">Away Team</label> 
            <select value={awayteam} onChange={awayChange} id='away' name="awayteam">
                {
                  teams.map((v,i)=> <option disabled={v.name===hometeam} key={"awayteam"+i}>{v.name}</option>)
                }
            </select>
            <button>Add</button>
        </form>
    
  )
}

export default GameAdd;