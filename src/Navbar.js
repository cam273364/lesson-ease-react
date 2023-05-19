


function Navbar() {
   

   return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Schedule</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="//codeply.com">Billing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">My Lessons</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Log Out</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
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