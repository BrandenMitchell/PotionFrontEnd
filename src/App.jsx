import { useState } from 'react';

import './App.css';

import Sidebar from './components/sidebar';
import CustomBackground from './components/customBackground';
import RecentlyViewed from './components/RecentlyViewed';
// import Widgets from './components/widgets';


function App() {


  return (
    <div className='App'>
     
        <div className="nav">
          <Sidebar/>
        </div>    
        
        <div className='main'>
          <CustomBackground/>

          
            <RecentlyViewed/>
            {/* <Widgets/> */}
        
          
          

    
        </div>
      

      
      
    </div>
  )
}

export default App

