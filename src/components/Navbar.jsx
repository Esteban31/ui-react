function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md shadow-el" style={{backgroundColor:'#DEDEDE'}}>
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"></div>
                <div class="mx-auto order-2">
                    <a class="navbar-brand mx-auto" href="#" style={{textDecoration:'none', color:'black'}}> <strong>Simple</strong> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{textDecoration:'none', color:'black'}}>
                                <i class="fas fa-user-alt"></i>
                                Andres Felipe Cardona</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{textDecoration:'none', color:'black'}}><i class="fas fa-cog"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}
export default Navbar




{/* <div class="container-fluid">
                    <a class="navbar-brand" style={{textDecoration:'none', color:'black'}}><strong>Simple</strong></a>
                    <ul class="nav d-flex"> 
                        <li class="nav-item"></li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" style={{textDecoration:'none', color:'black'}}><strong>Hamilton TDEA</strong></a>
                        </li>
                    </ul>
                </div> */}