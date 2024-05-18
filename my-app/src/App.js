//import './components/Header/header stule.css';
//import './App.css';
import Header from './components/Header/header.js'
import Top from '/workspaces/Kursavv/my-app/src/pages/top.js' 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Body from '/workspaces/Kursavv/my-app/src/components/Body/body.js';
import { useState } from 'react';
import Search from '/workspaces/Kursavv/my-app/src/pages/search.js';
import Random_title from '/workspaces/Kursavv/my-app/src/pages/random_title.js';
import News from '/workspaces/Kursavv/my-app/src/pages/news.js';

function App() {
  const [tab, setTab] = useState()
  return (
    <div className="App">
        <Header />
        <Body state={tab} change={(current) => setTab(current)} />
        {tab==='search'&& <Search/>}
        {tab==='top'&& <Top/>}
        {tab==='random_title'&& <Random_title/>}
        {tab==='news'&& <News/>}
      </div>
  );
}

export default App;
