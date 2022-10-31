import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Nav from './component/nav/Nav';
// import Header from './component/header/Header';
import Home from './component/Home/Home';
import SignUp from './component/user/signUp/SignUp';
import LogIn from './component/user/login/Login';
import AddContact from './component/contact/addContact/AddContact';
import FindContact from './component/contact/findContact/FindContact';
import RemoveContact from './component/contact/deleteContact/deleteContact';
import UpdateContact from './component/contact/updateContact/UpdateContact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>   
        <Route path='/contact'>
          <Route path='new' element={<AddContact/>}/>
          <Route path='search' element={<FindContact/>}/>
          <Route path='delete' element={<RemoveContact/>}/>
          <Route path='update' element={<UpdateContact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
