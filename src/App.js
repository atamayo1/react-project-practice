import logo from './logo.svg';
import MyComponent from './Components/MyComponent/MyComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import AjaxComponent from './Components/AjaxComponent/AjaxComponent';
import FormsComponent from './Components/FormsComponent/FormsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name={"Anthony Tamayo Ortega"} />
        <hr />
        <SecondComponent actualYear={new Date().getFullYear()} />
        <hr />
        <AjaxComponent />
        <hr />
        <FormsComponent />
      </header>
    </div>
  );
}

export default App;
