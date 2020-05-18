import React, { Component } from 'react'
import Menu from './Menu'

export default class Page404 extends Component {
    render() {
        return (
            <>
                <div id="body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <nav>
                                    <div id="menu" class="collapse navbar-collapse">
                                        <Menu />
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="row">
                            <div id="main" class="col-lg-8 col-md-12 col-sm-12">
                                <div id="slide" class="carousel slide" data-ride="carousel">
                                    <ul class="carousel-indicators">
                                        <li data-target="#slide" data-slide-to="0" class="active"></li>
                                        <li data-target="#slide" data-slide-to="1"></li>
                                        <li data-target="#slide" data-slide-to="2"></li>
                                        <li data-target="#slide" data-slide-to="3"></li>
                                        <li data-target="#slide" data-slide-to="4"></li>
                                        <li data-target="#slide" data-slide-to="5"></li>
                                    </ul>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="images/slide-1.png" alt="Vietpro Academy" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="images/slide-2.png" alt="Vietpro Academy" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="images/slide-3.png" alt="Vietpro Academy" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="images/slide-4.png" alt="Vietpro Academy" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="images/slide-5.png" alt="Vietpro Academy" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="images/slide-6.png" alt="Vietpro Academy" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#slide" data-slide="prev">
                                        <span class="carousel-control-prev-icon"></span>
                                    </a>
                                    <a class="carousel-control-next" href="#slide" data-slide="next">
                                        <span class="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                                <div id="order-success">
                                    <div class="row">
                                        <h1>404</h1>
                                    </div>
                                </div>
                            </div>
                            <div id="sidebar" class="col-lg-4 col-md-12 col-sm-12">
                                <div id="banner">
                                    <div class="banner-item">
                                        <a href="#"><img class="img-fluid" src="images/banner-1.png" /></a>
                                    </div>
                                    <div class="banner-item">
                                        <a href="#"><img class="img-fluid" src="images/banner-2.png" /></a>
                                    </div>
                                    <div class="banner-item">
                                        <a href="#"><img class="img-fluid" src="images/banner-3.png" /></a>
                                    </div>
                                    <div class="banner-item">
                                        <a href="#"><img class="img-fluid" src="images/banner-4.png" /></a>
                                    </div>
                                    <div class="banner-item">
                                        <a href="#"><img class="img-fluid" src="images/banner-5.png" /></a>
                                    </div>
                                    <div class="banner-item">
                                        <a href="#"><img class="img-fluid" src="images/banner-6.png" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
