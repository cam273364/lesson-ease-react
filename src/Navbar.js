import { Link } from "react-router-dom";
import Schedule from "./Schedule";


function Navbar( {handleLogOut} ) {
   

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
                <Link to="/lessons">My Lessons</Link>
            </li>
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