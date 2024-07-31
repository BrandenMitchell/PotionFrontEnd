import { useState } from 'react';

import './App.css';

import Sidebar from './components/sidebar';
import CustomBackground from './components/customBackground';

function App() {


  return (
    <div className='App'>
        <div>
        <Sidebar/>    
        </div>
        <div>
        <CustomBackground/>
        </div>
      

      
      
    </div>
  )
}

export default App

