import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './models/users'
import Nav from './components/nav';
import Reimbursement from './components/reimbursement';
import { useState } from 'react';
import Submit from "./components/submit";
import Login from './components/login';
import NewUser from './components/addUser';
import ReimbursementEmployee from './components/reimbursementEmployee';
// import jwtDecode from 'jwt-decode';





function App() {
  let [user,setUser] = useState<User>();
  useEffect(() => {
    const loggedInUser: string | null = (sessionStorage.getItem('token') || '{}')
    if (loggedInUser) {
      let decoded: User = jwtDecode(loggedInUser)
      // console.log(decoded)
      // let foundUser: User  = (JSON.parse(decoded) || {});
      // console.log(foundUser)
      setUser(decoded);
      sessionStorage.setItem('token', loggedInUser)
      
    }else{
      <Navigate to='/'/>
    }
  }, []);

  return (
    <>
    <BrowserRouter>
      <Nav currentUser={user} setCurrentUser={setUser}/>
      <Routes>
        <Route path='/' element={<Login currentUser={user} setCurrentUser={setUser}/>}></Route>
        <Route path='/user/add' element={<NewUser currentUser={user}/>}></Route>
        <Route path='/reimbursement' element={<Reimbursement currentUser={user}/>}></Route>
        <Route path='/user/id/reimbursement' element={<ReimbursementEmployee currentUser={user}/>}></Route>
        <Route path='/submit' element={<Submit currentUser={user}/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
