import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function StudentDetail({ teacherID }) {

    const location = useLocation()
    const studentID = getStudentIdFromPath(location.pathname)
    

    const [note, setNote] = useState('')
    const [notes, setNotes] = useState([])
    const [student, setStudent] = useState({})

    // setNotes(getNotes(teacherID, studentID))
    console.log('notes', notes)
    function handleNoteChange(event) {
        setNote(event.target.value)
    }

    function handleNewNote(event) {
        axios.post('http://localhost:3001/addnote', {
            content: note,
            studentID: studentID, //in address or saved in state, have to use use params in router dom to get from 
            teacherID: teacherID
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    function getNotes(teacherID, studentID) {
        axios.get('http://localhost:3001/notes', { params: { teacherID: teacherID, studentID: studentID } }).then(response => {
            console.log('dis response', response)
            if (!response) {
                console.log('had no response')
                setNotes([])
            }
            
            setNotes(response.data)
        }).catch(function (error) {
            console.log(error)
           
        })
    }
    //fix the way im fetching the data and if i have methods set up in mongoose need to use .populate otherwise need an additional query or fetch request to find the data i need from teacher/student. for now can map out just the note titles
    useEffect(() => {
        getNotes(teacherID, studentID)
        getStudentNames()

        
        // setNotes(retrievedNotes)
    }, [])

    //the getnotes function is correctly getting response data but when i put it in retrievenotes the response is undefined and cant figure out why. to replicate the problem in console click my students and then draw.
    //need to conditionally render this
    //create a component that creates table, fetch the data and pass in the data, or try useState instead of useEffect
    //need a hook because the state changing needs to trigger the effect. 


    function getStudentIdFromPath(path) {
        // 'this is what path looks like: /student/:studentId
        const splitPath = path.split('/')
        return splitPath.pop()
    }

    //function to get the first and last name values of the student object
    function getStudentNames() {
        axios.get(`http://localhost:3001/student/${studentID}`).then((response) => {
            setStudent(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    //axios.get included in that function to grab it. 

    function deleteNote(note) {
        axios.delete(`http://localhost:3001/deletenote/${note._id}`).then(() => {
            let copy = [...notes]
            copy = copy.filter((element) => element._id != note._id)
            setNotes(copy)
        })
        .catch(function (error) {
            console.log(error)
        })
        //deleting it
    }

    return (
        <div>
            <div>Create a note for {student.firstName} {student.lastName}</div>
            <div class="input-group">
                <span class="input-group-text">Note</span>
                <textarea class="form-control" aria-label="With textarea" value={note} onChange={handleNoteChange}></textarea>
            </div>
            <button type="button" class="btn btn-dark" onClick={handleNewNote}>Submit</button>
           
            {/* <table>
                
            
            {theseNuts.map((note) => {
                return (
                    <tr>
                        <td>
                            {note.note}
                        </td>
                        <td>
                            last name
                        </td>
                        <td>
                            email
                        </td>
                    </tr>

                )
            })}
            </table> */}
            <table>
                {(notes || []).map(note => {
                    return (
                        <tr>
                            <td>{note.content}</td>
                            <td>date created</td>
                            <td><button type="button" class="btn btn-dark" onClick={() => deleteNote(note)}>Delete</button></td>
                        </tr>

                    )
                })}
            </table>

        </div>
    )





}





export default StudentDetail

//usestate
//text field to enter in info
//button to press like submit

//api call to get all notes for this student and teacher combo