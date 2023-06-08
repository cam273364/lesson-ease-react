import { Link } from "react-router-dom";
import Schedule from "./Schedule";
import App from "./App"

function Navbar( {handleLogOut, isInstructor} ) {
    
   console.log(isInstructor)
    
   function getMyStudentsOrInstructors(isInstructor) {
        let htmlBlock = ""
        if (isInstructor) {
            htmlBlock = (            
                <li class="nav-item">
                    <Link to="/students">My Students</Link>
                </li>
                )
        } else {
            htmlBlock =  (
                <li class="nav-item">
                    <Link to="/myinstructors">My Instructors</Link>
                </li>
            )
        }
        return htmlBlock

   }

   return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to="/schedule">Schedule</Link>
            </li>
            <li class="nav-item">
                <Link to="/billing">Billing</Link>
            </li>
            <li class="nav-item">
                <Link to="/myLessons">My Lessons</Link>
            </li>

            {getMyStudentsOrInstructors(isInstructor)}
            <li class="nav-item">
                <Link to="/" onClick={handleLogOut}>Log Out</Link>
            </li>
            <li class="nav-item">
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">LessonEase</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
   
</nav>
   )

}

export default Navbar