//import './components/Header/header stule.css';
//import './App.css';
import Header from './components/Header/header.js'
import './components/Body/body.css'
import loupe from '/workspaces/Kursavv/my-app/src/images/loupe.png'
import podium from '/workspaces/Kursavv/my-app/src/images/podium.png'
import megaphone from '/workspaces/Kursavv/my-app/src/images/megaphone.png'
import cleve from '/workspaces/Kursavv/my-app/src/images/cleve.png'


function App() {
  return (
    <div className="App">
    <Header /> 
    <div class='buttonSection'> 
      <button class='button'>
      <img src= {loupe} alt="My Image"></img>
       Search
      </button>
      <button class='button'>
       <img src= {podium}  alt="My Image"></img>
        Top
      </button>
      <button class='button'>
      <img src= {cleve} alt="My Image"></img>
        Random title
        </button>
      <button class='button'>
      <img src= {megaphone}  alt="My Image"></img>
        News
      </button>
      </div> 
    </div>
  );
}

export default App;
