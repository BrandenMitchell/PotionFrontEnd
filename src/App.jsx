import { useState } from 'react';

import './App.css';

import Sidebar from './components/sidebar';
import CustomBackground from './components/customBackground';
import RecentlyViewed from './components/RecentlyViewed';
import Widgets from './components/widgets';


function App() {


  return (
    <div className='App'>
     
        <div className="nav">
          <Sidebar/>
        </div>    
        
        <div className='main'>
          <CustomBackground/>

          {/* removing the below div will reset the webpage to where it should be */}
          {/* <div className='horizontal-sec'> */}
            <RecentlyViewed/>
            <Widgets/>
          {/* </div> */}
          
          

    
        </div>
      

      
      
    </div>
  )
}

export default App

