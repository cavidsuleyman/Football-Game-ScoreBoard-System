import React, {useContext} from 'react';
import './style.css';
import {ScoreGame} from '../../Context';


const SummaryScore = () => {
  const {score,dispatch} = useContext(ScoreGame);
  return (
    <div className='ending'>
        <h3>Ending games:</h3>
        <ol type='1'>
           {
             score.filter(v=>!v.status).map((v,i)=>(
              <li key={"summary"+i}>
                 {v.hometeam} {v.hometeamscore} - {v.awayteam} {v.awayteamscore} 
              </li>
             ))
           }
            
        </ol>
    </div>
  )
}

export default SummaryScore;