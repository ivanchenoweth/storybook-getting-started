import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Storybook getting Started V.1.1 15-Nov-2020
        </p>
        <a
          className="App-link"
          href="https://github.com/ivanchenoweth/storybook-getting-started"
          target="_blank"
          rel="noopener noreferrer"
        > https://github.com/ivanchenoweth/storybook-getting-started
        </a>

        <a
          className="App-link"
          href="https://www.chromatic.com/builds?appId=5fb1f3d6552e8e00212b1987"
          target="_blank"
          rel="noopener noreferrer"
        > Review components
        </a>

        
      </header>
    </div>
  );
}

export default App;
