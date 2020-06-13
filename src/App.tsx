import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const StyledApp = styled.div`
  text-align: left;
`

const StyledAppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <StyledApp>
      <StyledAppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </StyledAppHeader>
    </StyledApp>
  );
}

export default App;
