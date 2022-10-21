import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home';
import { Pokemon } from './Pokemon';
import { Bunch } from './Bunch';
import { Example } from './Example';

function App() {

  
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={ <Home/> } />
    <Route path='/pokemon' element={ <Pokemon /> } />
    <Route path='/bunch' element={ <Bunch /> } />
    <Route path='/example' element={ <Example /> } />
    </Routes>

    </div>
  );
}

export default App;
