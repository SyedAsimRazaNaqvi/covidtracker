import React,{useState} from 'react';
import './App.css';
import AppBarSearch from './components/AppBar'
import SectionPanel from './components/Section'
import FootNav from './components/FooterNav'

function App() {

  const screenConfig = useState()
  return (
    <div>
      <AppBarSearch />
      <SectionPanel inititalScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
