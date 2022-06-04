import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ScoreBoard from '../pages/ScoreBoard';
import Error from '../pages/Error';

const FootballScore = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ScoreBoard/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default FootballScore;