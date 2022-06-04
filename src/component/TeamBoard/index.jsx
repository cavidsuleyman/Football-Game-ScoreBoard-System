import React, {useContext} from 'react';
import {ScoreGame} from '../../Context';

import './style.css';

const TeamBoard = () => {
  
  let {teams} = useContext(ScoreGame);

  return (
    <div className='team'>
    <h3>Team Board</h3>
    <ol>
      {
        teams.sort((min,max)=>max.score-min.score).map((v,i)=>(
          <li key={"teams"+i}>{v.name} - {v.score}</li>
        ))
      }
        
    </ol>
    </div>
  )
}

export default TeamBoard;