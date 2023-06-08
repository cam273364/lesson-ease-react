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
import Students from "./Students"
import StudentDetail from "./StudentDetail"
import MyLessons from "./MyLessons"
import MyInstructors from "./MyInstructors"
import Billing from "./Billing"


function App() {
  const [userID, setUserID] = useState('')
  const [isInstructor, setIsInstructor] = useState(false)
  //for later - should have saved instructor and user id, and venmo all in one state
  //aka saving the whole user object in state
  const [user, setUser] = useState({})
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      var decoded = jwt_decode(token);
      setUser(decoded)
      console.log('decoded', decoded)
      setUserID(decoded._id)
      setIsInstructor(decoded.instructor)
      console.log(decoded)
    }
  }, [])
 
  useEffect(() => {
    if (userID && !isInstructor) {
      navigate("/schedule");
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
      <Navbar handleLogOut = {handleLogOut} isInstructor = {isInstructor}/>
      

      
      {userID? 
      <Routes>
        <Route path="/profile" element={<Profile userID = {userID} isInstructor={isInstructor}/>}/>
        <Route path="/schedule" element={<Schedule userID = {userID}/>}/>
        <Route path="/students" element={<Students userID = {userID}/>}/>
        <Route path="/student/:studentID" element={<StudentDetail teacherID ={userID}/>}/>
        <Route path="/myLessons" element={<MyLessons userID = {userID} userEmail = {userEmail} isInstructor = {isInstructor}/>}/>
        <Route path="/myinstructors" element={<MyInstructors userID = {userID}/>}/>
        <Route path="/billing" element={<Billing userID = {userID} venmo = {user.venmo}/>}/>
        
        
      
      </Routes>
      : 
      <Signin setUserID = {setUserID} setIsInstructor = {setIsInstructor} setUserEmail = {setUserEmail} setUser = {setUser}/>
      }

        
      
    </div>
  );
}



export default App;
