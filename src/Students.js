import axios from 'axios'
import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from "react-router-dom";

function Students({userID}) {
    const navigate = useNavigate();

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/students').then(response => {
            console.log(response.data)
            setUsers(response.data)
        }).catch(function(error) {
            console.log(error)
        })
      }, [])


    return (
      <div class="container-fluid">
        <div class="h3 my-3">Students</div>
        <div class="row justify-content-center">
        <div class="col-10">
        <table class="table table-dark table-striped">
            <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Notes</th>
            </tr>
            </thead>
            
            <tbody>
            {users.map(user => {
                return (
                    <tr>
                        
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td><i class="bi bi-pencil" onClick={() => {
                            navigate(`/student/${user._id}`)
                        }}></i></td>
                    </tr>

                )
        })}

            </tbody>
       
        </table>
        </div>
        </div>
      </div>
    
    )

    

    

}








export default Students