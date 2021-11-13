import React from 'react'
import Footer from './Footer'
import SideNav from './SideNav'

const Typography = () => {
    return (
        <div className="wrapper">
            {/* <SideNav/> */}
             <div class="main-panel">
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg " color-on-scroll="500">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#pablo"> Typography </a>
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
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Light Bootstrap Table Heading</h4>
                                    <p class="card-category">Created using Montserrat Font Family</p>
                                </div>
                                <div class="card-body">
                                    <div class="typography-line">
                                        <h1>
                                            <span>Header 1</span>The Life of LB Dashboard </h1>
                                    </div>
                                    <div class="typography-line">
                                        <h2>
                                            <span>Header 2</span>The Life of Light Bootstrap Dashboard </h2>
                                    </div>
                                    <div class="typography-line">
                                        <h3>
                                            <span>Header 3</span>The Life of Light Bootstrap Dashboard </h3>
                                    </div>
                                    <div class="typography-line">
                                        <h4>
                                            <span>Header 4</span>The Life of Light Bootstrap Dashboard </h4>
                                    </div>
                                    <div class="typography-line">
                                        <h5>
                                            <span>Header 5</span>The Life of Light Bootstrap Dashboard </h5>
                                    </div>
                                    <div class="typography-line">
                                        <h6>
                                            <span>Header 6</span>The Life of Light Bootstrap Dashboard </h6>
                                    </div>
                                    <div class="typography-line">
                                        <p>
                                            <span>Paragraph</span>
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                                        </p>
                                    </div>
                                    <div class="typography-line">
                                        <span>Quote</span>
                                        <blockquote>
                                            <p class="blockquote blockquote-primary">
                                                "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                <br/>
                                                <br/>
                                                <small>
                                                    - Noaa
                                                </small>
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div class="typography-line">
                                        <span>Muted Text</span>
                                        <p class="text-muted">
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                                        </p>
                                    </div>
                                    <div class="typography-line">
                                        <span>Primary Text</span>
                                        <p class="text-primary">
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
                                    </div>
                                    <div class="typography-line">
                                        <span>Info Text</span>
                                        <p class="text-info">
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                    </div>
                                    <div class="typography-line">
                                        <span>Success Text</span>
                                        <p class="text-success">
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                    </div>
                                    <div class="typography-line">
                                        <span>Warning Text</span>
                                        <p class="text-warning">
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                                        </p>
                                    </div>
                                    <div class="typography-line">
                                        <span>Danger Text</span>
                                        <p class="text-danger">
                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                    </div>
                                    <div class="typography-line">
                                        <h2>
                                            <span>Small Tag</span>
                                            Header with small subtitle
                                            <br/>
                                            <small>Use "small" tag for the headers</small>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
        // </div>
    )
}

export default Typography
