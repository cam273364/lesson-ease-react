import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";



function Signin({setUserID, setIsInstructor, setUserEmail, setUser}) {
const [email, setEmail] = useState('')
  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  const [password, setPassword] = useState('')
    function handlePasswordChange(event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

function handleLogin() {
    console.log('test')
    axios.post('http://localhost:3001/login', {
        email: email,
        password: password
    })
  .then(function (user) {
    // handle success
    //saves token to local storage
    localStorage.setItem('token', user.data.token)
    var decoded = jwt_decode(user.data.token);
    setUser(decoded)
    console.log('test sign in', user.data)
    console.log(user.data.userID)
    setIsInstructor(user.data.instructor)
    setUserID(user.data.userID)
    setUserEmail(email)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

}

function handleSignup() {
    console.log(instructor)
    axios.post('http://localhost:3001/signup', {
        email: email,
        password: password,
        instructor: instructor
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

//need to hide passwords in db
//need requirements for password

const [instructor, setInstructorStatus] = useState(false)
function handleInstructorStatus(event) {
    console.log(event.target.value)
    setInstructorStatus(!instructor)
}

return (
    <div>LessonEase
    
    <section id="description" class="container">
    <div class ="row justify-content-center">
        <div class="col-4">
            <input name="email" placeholder="eMail" value={email} onChange={handleEmailChange}/>
        </div>
        
    </div>
    <div class ="row justify-content-center">
        <div class="col-4">
            <input name="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
        </div>
    </div>

</section>

<section  class="row justify-content-center">
   
    <div class="col-auto">
        
            <button id="login" class="login-button" onClick={handleLogin}>Login</button>
        
    </div>
    <div class="col-auto">
        
            <button id="login" class="signup-button" onClick={handleSignup}>Sign up</button>
    
    </div>
    

   
</section>
<section>
    I am an instructor
    <div class="row justify-content-center">
        <input type="checkbox" onChange={handleInstructorStatus}></input>
    </div>
    </section>


</div>

)


}

export default Signin;