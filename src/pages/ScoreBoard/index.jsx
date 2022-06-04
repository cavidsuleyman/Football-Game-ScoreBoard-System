import React, {useReducer, useState} from 'react';
import './style.css';
import {AddGame,BeginScore,SummaryScore,TeamBoard} from '../../component';
import {ScoreGame} from '../../Context';
import {games,reducer,team} from '../../Data';


const ScoreBoard = () => {
  const [score,dispatch] = useReducer(reducer,games);
  const [teams, setTeams] = useState(team);
  return (
    <ScoreGame.Provider value={{score,dispatch, teams,setTeams}}>
      <div className='title'>
        <h1>World Football Game Score Board</h1>
      </div>
        <AddGame/>
      <div className='board'>
        <BeginScore />
        <SummaryScore/> 
      </div>
        <TeamBoard/> 
    </ScoreGame.Provider>
  )
}

export default ScoreBoard;