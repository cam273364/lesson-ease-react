import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Profile({userID}){

    const [firstName, setFirstName] = useState('')
    function handleFirstNameChange(event) {
        console.log(event.target.value)
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState('')
    function handleLastNameChange(event) {
        console.log(event.target.value)
        setLastName(event.target.value)
    }

    function handleUserInfoUpdate() {
        axios.post('http://localhost:3001/userinfoupdate', {
            firstName: firstName,
            lastName: lastName,
            userID: userID
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    useEffect(() => {
        axios.post('http://localhost:3001/user', {
            userID: userID,
            
        })
        .then(function (response) {
            console.log(response);
            setFirstName(response.data.user.firstName)
            setLastName(response.data.user.lastName)
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);
      
    return (
    <div>
        <div>Profile</div>
        <section id="profile-info">
            First Name: <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange}>

            </input>
            Last Name: <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange}>

            </input>
            <button onClick={handleUserInfoUpdate}>Update</button>
        </section>
    </div>
    

        




)}

export default Profile