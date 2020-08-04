import React from 'react';
import Container from './Components/Container/Container';
import TopComponent from './Components/Container/TopComponent/TopComponent';
import MiddleComponent from './Components/MiddleComponent/MiddleComponent';
import BottomComponent from './Components/BottomComponent/BottomComponent';

function App() {
  return (
    <div className="App">
      {/* Components will be imported below */}
      {/* Navbar within a container */}
      <Container />
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
    </div>
  );
}

export default App;
