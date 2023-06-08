import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Profile({ userID, isInstructor }) {

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
                <div class="container">
                    <div class="form-row row">
                        <div class="form-group col-6">
                            <label for="inputFirstName">First Name</label>
                            <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
                        </div>
                        <div class="form-group col-6">
                            <label for="inputLastName">Last Name</label>
                            <input type="text" class="form-control" id="inputLastName" value={lastName} onChange={handleLastNameChange} />
                        </div>
                    </div>
                    <div class="form-row row">
                        <div class="form-group col-12">
                            <label for="inputEmail">Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" value={email} onChange={handleEmailChange} />
                        </div>

                    </div>
                    {isInstructor && <>
                        <div class="form-row row">
                            <div class="form-group col-12">
                                <label for="inputVenmo">Venmo@</label>
                                <input class="form-control" id="inputEmail" type="text" placeholder="What Venmo handle will you be paid?" value={venmo} onChange={handleVenmoChange} />
                            </div>

                        </div>
                        <div class="form-row row">
                            <div class="form-group col-12">
                                <label for="inputBio">Instructor Bio</label>
                                <textarea rows="4" id="inputBio" class="form-control" cols="100" type="text" placeholder="Tell your students about yourself!" value={bio} onChange={handleBioChange} />
                            </div>

                        </div>
                    </>}
                    <button className="btn btn-primary"onClick={handleUserInfoUpdate}>Update</button>
                </div>

            </section>
        </div>
    )
}
{/* <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputFirstName">First Name</label>
      <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" value={firstName} onChange={handleFirstNameChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputLastName">Last Name</label>
      <input type="text" class="form-control" id="inputLastName" value={lastName} onChange={handleLastNameChange}/>
    </div>
  </div> */}

export default Profile

//alert when someone clicks update on profile page to let them know their info was successfully changed
//when you click refresh, should it go to schedule every time, or just refresh the current page/view?

//{isInstructor &&
//<div> Venmo@: <textarea rows="4" cols="100" type="text" placeholder="What Venmo handle will you be paid?" value={venmo} onChange={handleVenmoChange}>
//</textarea></div>}