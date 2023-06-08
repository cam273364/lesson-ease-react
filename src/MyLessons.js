import axios from "axios"
import { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useState } from 'react'
import moment from 'moment'

function MyLessons({userEmail, isInstructor}) {

    const [calendarEvents, setCalendarEvents] = useState([])

    useEffect(() => {
        // our api or calendly api is going to know email address of user to find 
        //only that users events and to give that to our api 
        //it needs to go on the req body, which is why its a post request
        // axios.post("/myLessons")//configure this route
        

        //call calendly to get events using bearer token from env
//         
        //check to make sure i am teacher
        const token = localStorage.getItem('token')
        const decoded = jwt_decode(token)
        console.log('decoded', decoded)
        const encodedEmail = encodeURI(decoded.email)
        console.log('encoded email', encodedEmail)
        let calendlyApiUrl = `https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F6a011df2-80fb-4b2f-979a-8a82ba25467d`
        if(!isInstructor) {
            calendlyApiUrl = calendlyApiUrl + `&invitee_email=${encodedEmail}`
        }
        console.log(userEmail)
       
        console.log(calendlyApiUrl)
        const authToken = process.env.REACT_APP_CALENDLY_TOKEN
        console.log(authToken)
        axios.get(calendlyApiUrl, {
            headers: {
                Authorization: `Bearer ${authToken}`
                

            }
        }).then(function(response) {
            console.log('response', response)
            // calendarEvents = response.data.collection
            // calendarEvents = JSON.stringify(response.data.collection)
            setCalendarEvents(response.data.collection)

            //next step console log response.data
            //console.log response.data.collection
        }).catch(function (error) {
            console.log(error)
        })

    }, [])
    return (

      <div>
        <div>MyLessons</div>
        <div>{calendarEvents.map((event) => {
            return (
                <div>{event.name} Lesson Day/Time: {moment(event.start_time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
            )
        })}</div>
      </div>
    )

    

    

}





// const calendlyApiUrl = 'https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F6a011df2-80fb-4b2f-979a-8a82ba25467d'

//invitee_email=${userEmail}&

export default MyLessons