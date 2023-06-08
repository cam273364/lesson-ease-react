import axios from 'axios'
import { useEffect, useState } from 'react'



function MyInstructors({userID}) {
    const [instructors, setInstructors] = useState([])


    function getInstructor() {
        axios.get(`http://localhost:3001/myinstructors/${userID}`, {
            userId: userID
        }).then(function (response) {
            setInstructors(response.data)
        }).catch((error) => 
            console.log(error)
        )
    }
    useEffect(() => {
        getInstructor()
    },[])

   

    // function getInstructorName() {
    //     getInstructorID().then((instructor) => {
            
    //     })
    // }

    function handleSendEmail(email) {
        window.location.href=`mailto:${email}`
    }
    

    return (
      <div>
        <div>MyInstructors</div>
        <table>
            <tbody>
                {instructors.map(instructor => {
                    return (
                        <tr>
                            <td>{instructor.firstName}</td>
                            <td>{instructor.lastName}</td>
                            <td>{instructor.bio}</td>
                            <td><button type="button" class="btn btn-dark" onClick={() => handleSendEmail(instructor.email)}>email</button></td>
                        </tr>

                )
                })}
            </tbody>
            
        </table>
      

      </div>
    )

    

    

}








export default MyInstructors