import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Profile({userID, isInstructor}){

    const [bio, setBio] = useState('')
    function handleBioChange(event) {
        setBio(event.target.value)
    }

    const [firstName, setFirstName] = useState('')
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState('')
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }

    const [email, setEmail] = useState('')
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    
    const [venmo, setVenmo] = useState('')
    function handleVenmoChange(event) {
        setVenmo(event.target.value)
    }

    function handleUserInfoUpdate() {
        axios.post('http://localhost:3001/userinfoupdate', {
            firstName: firstName,
            lastName: lastName,
            userID: userID,
            email: email,
            bio: bio,
            venmo: venmo
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })

    }


    // function handleBioChange() {
    //     axios.post('http://localhost:3001/userinfoupdate', {
    //         bio: bio
    //     }).then(function (response) )
    // }

    useEffect(() => {
        axios.post('http://localhost:3001/user', {
            userID: userID,
            
        })
        .then(function (response) {
            console.log(response);
            setFirstName(response.data.user.firstName)
            setLastName(response.data.user.lastName)
            setBio(response.data.user.bio)
            setEmail(response.data.user.email)
            setVenmo(response.data.user.venmo)
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
            Last Name: <input type="text" placeholder="Email Address" value={email} onChange={handleEmailChange}>
            </input>
           {isInstructor && 
            <div> Instructor Bio: <textarea rows="4" cols="100" type="text" placeholder="Tell your students about yourself!" value={bio} onChange={handleBioChange}>
           </textarea></div>}
           {isInstructor &&
            <div> Venmo@: <textarea rows="4" cols="100" type="text" placeholder="What Venmo handle will you be paid?" value={venmo} onChange={handleVenmoChange}>
           </textarea></div>}
            <button onClick={handleUserInfoUpdate}>Update</button>
        </section>
    </div>
    

        




)}

export default Profile

//alert when someone clicks update on profile page to let them know their info was successfully changed
//when you click refresh, should it go to schedule every time, or just refresh the current page/view?