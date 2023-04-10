import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Splash from './components/splash';
import Reimbursement from './components/reimbursement';
import { useState } from 'react';
import Submit from "./components/submit";



function App() {
  let [user,setUser] = useState();

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Splash />}></Route>
        <Route path='/reimbursement' element={<Reimbursement currentUser={user}/>}></Route>
        <Route path='/submit' element={<Submit currentUser={user}/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
