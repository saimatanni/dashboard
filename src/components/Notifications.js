import React from 'react'
import Footer from './Footer'
import SideNav from './SideNav'

const Notifications = () => {
    return (
        <div className="wrapper">
            {/* <SideNav/> */}
             <div class="main-panel">
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg " color-on-scroll="500">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#pablo"> Notifications </a>
                    <button href="" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar burger-lines"></span>
                        <span class="navbar-toggler-bar burger-lines"></span>
                        <span class="navbar-toggler-bar burger-lines"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="nav navbar-nav mr-auto">
                            <li class="nav-item">
                                <a href="#" class="nav-link" data-toggle="dropdown">
                                    <i class="nc-icon nc-palette"></i>
                                    <span class="d-lg-none">Dashboard</span>
                                </a>
                            </li>
                            <li class="dropdown nav-item">
                                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <i class="nc-icon nc-planet"></i>
                                    <span class="notification">5</span>
                                    <span class="d-lg-none">Notification</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Notification 1</a>
                                    <a class="dropdown-item" href="#">Notification 2</a>
                                    <a class="dropdown-item" href="#">Notification 3</a>
                                    <a class="dropdown-item" href="#">Notification 4</a>
                                    <a class="dropdown-item" href="#">Another notification</a>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nc-icon nc-zoom-split"></i>
                                    <span class="d-lg-block">&nbsp;Search</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#pablo">
                                    <span class="no-icon">Account</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="no-icon">Dropdown</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#pablo">
                                    <span class="no-icon">Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- End Navbar --> */}
            <div class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Notifications</h4>
                            <p class="card-category">Handcrafted by our friend
                                <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the
                                <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full documentation.</a>
                            </p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>
                                        <small>Notifications Style</small>
                                    </h5>
                                    <div class="alert alert-info">
                                        <span>This is a plain notification</span>
                                    </div>
                                    <div class="alert alert-info">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span>This is a notification with close button.</span>
                                    </div>
                                    <div class="alert alert-info alert-with-icon" data-notify="container">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span data-notify="icon" class="nc-icon nc-bell-55"></span>
                                        <span data-notify="message">This is a notification with close button and icon.</span>
                                    </div>
                                    <div class="alert alert-info alert-with-icon" data-notify="container">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span data-notify="icon" class="nc-icon nc-bell-55"></span>
                                        <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h5>
                                        <small>Notification States</small>
                                    </h5>
                                    <div class="alert alert-primary">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span>
                                            <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                                    </div>
                                    <div class="alert alert-info">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span>
                                            <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                                    </div>
                                    <div class="alert alert-success">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span>
                                            <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                                    </div>
                                    <div class="alert alert-warning">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span>
                                            <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                                    </div>
                                    <div class="alert alert-danger">
                                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                                            <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                        <span>
                                            <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div class="places-buttons">
                                <div class="row">
                                    <div class="col-md-6 offset-md-3 text-center">
                                        <h4 class="card-title">Notifications Places
                                            <p class="card-category">
                                                <small>Click to view notifications</small>
                                            </p>
                                        </h4>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-3 col-lg-3">
                                        <button class="btn btn-default btn-block" onclick="demo.showNotification('top','left')">Top Left</button>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <button class="btn btn-default btn-block" onclick="demo.showNotification('top','center')">Top Center</button>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <button class="btn btn-default btn-block" onclick="demo.showNotification('top','right')">Top Right</button>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-3 col-lg-3">
                                        <button class="btn btn-default btn-block" onclick="demo.showNotification('bottom','left')">Bottom Left</button>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <button class="btn btn-default btn-block" onclick="demo.showNotification('bottom','center')">Bottom Center</button>
                                    </div>
                                    <div class="col-md-3 col-lg-3">
                                        <button class="btn btn-default btn-block" onclick="demo.showNotification('bottom','right')">Bottom Right</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h4 class="title">Modal</h4>
                                    <a class="btn btn-info btn-fill btn-wd" data-toggle="modal" data-target="#myModal1" href="#pablo">
                                        Launch Modal Mini
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Mini Modal --> */}
                    <div class="modal fade modal-mini modal-primary" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header justify-content-center">
                                    <div class="modal-profile">
                                        <i class="nc-icon nc-bulb-63"></i>
                                    </div>
                                </div>
                                <div class="modal-body text-center">
                                    <p>Always have an access to your profile</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-link btn-simple">Back</button>
                                    <button type="button" class="btn btn-link btn-simple" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  End M?odal --> */}
                </div>
            </div>
           <Footer/>
        </div>
        </div>
    )
}

export default Notifications
