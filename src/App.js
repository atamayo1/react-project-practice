import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent/MyComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import AjaxComponent from './Components/AjaxComponent/AjaxComponent';
import FormsComponent from './Components/FormsComponent/FormsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name={"Anthony Tamayo Ortega"} />
        <SecondComponent actualYear={new Date().getFullYear()} />
        <AjaxComponent />
        <FormsComponent />
      </header>
    </div>
  );
}

export default App;
