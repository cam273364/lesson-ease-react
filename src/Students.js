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
      <div>
        <div>Students</div>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Notes</th>
            </tr>
            
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

        </table>

      </div>
    
    )

    

    

}








export default Students