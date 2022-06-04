import React, {useContext, useEffect, useRef} from 'react';
import './style.css';
import {ScoreGame} from '../../Context'



const BeginScore = () => {
  const {score,dispatch,setTeams} = useContext(ScoreGame);

  const activeGame = useRef(); 

  const interval = useRef();

  const endGame = (value) => {
    dispatch({type: "END", id: value.id});
    if(value.hometeamscore > value.awayteamscore){
        setTeams(s=>[...s.map(v=>v.name==value.hometeam ? {...v,score: v.score + 3 }: v)])
    }else if(value.hometeamscore < value.awayteamscore){
      setTeams(s=>[...s.map(v=>v.name==value.awayteam ? {...v,score: v.score + 3 }: v)])
    }else{
      setTeams(s=>[...s.map(v=>(v.name==value.hometeam) || (v.name==value.awayteam) ? {...v,score: v.score + 1 }: v)])
    }
  }
 
  const goal = () =>{
      if(activeGame.current.length>0){
        const index = Math.floor(Math.random()*(activeGame.current.length));
        const gameId = activeGame.current[index].id;
        const selectteam = Math.floor(Math.random()*10);
        if(selectteam%2==0) dispatch({type: "HOMEGOAL", id: gameId});
        else dispatch({type: "AWAYGOAL", id: gameId});
      }
      
  } 

    useEffect(()=>{
        clearInterval(interval.current); 
        activeGame.current=score.filter(v=>v.status);
        interval.current = setTimeout(() => {
            goal();
        }, 10000); 
    });

  return (
    <div className='active'>
    <h3>Active Games:</h3>
    <ol type='a'>
      {
        score.filter(v=>v.status).map((v,i)=>(
          <li key={"score"+i}>
           {v.hometeam} - {v.awayteam}: {v.hometeamscore} - {v.awayteamscore} 
          &nbsp;
        
           <button onClick={()=>endGame(v)}>End Game</button>
        </li>
        ))
      }
        
    </ol>
    </div>
  )
}

export default BeginScore;