import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import Navbar from './Navbar';
import Profile from './Profile';
import Schedule from './Schedule';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function App() {
  const [userID, setUserID] = useState('')
  const [isInstructor, setIsInstructor] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      var decoded = jwt_decode(token);
      setUserID(decoded._id)
      setIsInstructor(decoded.instructor)
      console.log(decoded)
    }
  }, [])
 
  useEffect(() => {
    if (userID && !isInstructor) {
      navigate("/profile");
    } else if (userID && isInstructor) {
      navigate("/schedule")
    } 
  }, [userID]);
  
  function handleLogOut() {
    console.log("something after 37")
    setUserID("")
    setIsInstructor(false)
    localStorage.removeItem('token')
    console.log('something after 41')
  }

  return (
    <div className="App">
      <Navbar handleLogOut = {handleLogOut}/>
      

      
      {userID? 
      <Routes>
        <Route path="/profile" element={<Profile userID = {userID} />}/>
        <Route path="/schedule" element={<Schedule userID = {userID}/>}/>
        
      
      </Routes>
      : 
      <Signin setUserID = {setUserID} setIsInstructor = {setIsInstructor}/>
      }

        
      
    </div>
  );
}



export default App;
