import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import './App.css';

const SpreadWithTheKey = loadable(
  () => import(/* webpackChunkName: "SpreadWithTheKey" */ './SpreadWithTheKey')
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>
          This text is yellow, <span>but this part should be red</span>
        </Text>
        <SpreadWithTheKey />
      </header>
    </div>
  );
}

export default App;

const Text = styled.p`
  color: yellow;

  & > span {
    color: red;
  }
`;
