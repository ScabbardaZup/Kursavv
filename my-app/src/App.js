//import './components/Header/header stule.css';
//import './App.css';
import Header from './components/Header/header.js'
import './components/Body/body.css'
import loupe from '/workspaces/Kursavv/my-app/src/images/loupe.png'

function App() {
  return (
    <div className="App">
    <Header /> 
    <div class='buttonSection'> 
      <button class='button'>
      <img src= {loupe} alt="My Image"></img>
       Search
      </button>
      <button class='button'>Top</button>
      <button class='button'>Random title</button>
      <button class='button'>News</button>
      </div> 
    </div>
  );
}

export default App;
