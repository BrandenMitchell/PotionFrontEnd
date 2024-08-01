import { useState } from 'react';

import './App.css';

import Sidebar from './components/sidebar';
import CustomBackground from './components/customBackground';

function App() {


  return (
    <div className='App'>
     
        <div className="nav">
          <Sidebar/>
        </div>    
        
        <div className='main'>
          <CustomBackground/>
    
        </div>
      

      
      
    </div>
  )
}

export default App

