import React, { useEffect } from 'react'
import Main from './components/Main';
import Page2 from './components/Page2';
import Brg from './components/brg';

function App() {
  
  useEffect(() => {
    document.title = "ALTER EGO Project Group | Bureau of Architecture and Design"
  }, [])

  return (
    
    <div>
    <Brg />
    <Main />
    <Page2 />
    </div>
  );
}


export default App;