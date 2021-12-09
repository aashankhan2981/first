import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Card } from './components/Card'
import { Component } from './components/Component'
import { Fourth } from './components/Fourth'
import { Second } from './components/Second'
import {Third} from './components/Third'

export const App = () => {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route path="/" element={<Component/>}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third/>} />
          <Route path="/fourth" element={<Fourth/>} />
        </Routes>
      </Router>
    </div>
  )
}

