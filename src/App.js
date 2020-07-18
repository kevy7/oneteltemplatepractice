import React from 'react';
import Container from './Components/Container/Container';
import TopComponent from './Components/Container/TopComponent/TopComponent';
import MiddleComponent from './Components/MiddleComponent/MiddleComponent';

function App() {
  return (
    <div className="App">
      {/* Components will be imported below */}
      {/* Navbar within a container */}
      <Container />
      <TopComponent />
      <MiddleComponent />
    </div>
  );
}

export default App;
