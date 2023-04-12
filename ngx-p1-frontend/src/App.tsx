import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './models/users'
import Nav from './components/nav';
import Reimbursement from './components/reimbursement';
import { useState } from 'react';
import Login from './components/login';



function App() {
  let [user,setUser] = useState<User>();

  return (
    <>
    <BrowserRouter>
      <Nav currentUser={user} setCurrentUser={setUser}/>
      <Routes>
        <Route path='/' element={<Login currentUser={user} setCurrentUser={setUser}/>}></Route>
        <Route path='/reimbursement' element={<Reimbursement currentUser={user}/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
