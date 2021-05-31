import React from 'react';
import PrimaryButton from './components/commons/PrimaryButton';
import SecondaryButton from './components/commons/SecondaryButton';
import MainRouter from './components/router/MainRouter';

function App() {
  return (
    <div className="App">
      <MainRouter />
      <PrimaryButton onClick={() => alert('OK!')}>OK</PrimaryButton>
      <SecondaryButton onClick={() => alert('Cancel')}>Cancel</SecondaryButton>
    </div>
  );
}

export default App;
