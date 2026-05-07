import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WEB DEVELOPMENT add{process.env.REACT_APP_KEY_APPNAME}
        </a>
        <h1>v~{process.env.REACT_APP_KEY_VERSION}</h1>
        <h2>secret key~{process.env.REACT_APP_KEY_SECRETLY}</h2>
        <h3>manage~{process.env.REACT_APP_KEY_MANAGE}</h3>
        <h4>update~{process.env.REACT_APP_KEY_UPDATE}</h4>
      </header>
    </div>
  );
}

export default App;
