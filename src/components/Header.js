import React, { Component } from 'react'

export default class Header extends Component {
     render() {
          return (
                    <header>
                         <div className="container-fluid position-relative no-side-padding">
                              <a href="https://www.facebook.com/" className="logo"><img src="images/logo.png" alt="" /></a>
                              <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon" /></div>
                              <ul className="main-menu visible-on-click" id="main-menu">
                                   <li><a href="https://www.facebook.com/">Home</a></li>
                                   <li><a href="https://www.facebook.com/">Categories</a></li>
                                   <li><a href="https://www.facebook.com/">Features</a></li>
                              </ul>
                              <div className="src-area">
                                   <form>
                                        <button className="src-btn" type="submit"><i className="ion-ios-search-strong" /></button>
                                        <input className="src-input" type="text" placeholder="Type of search" />
                                   </form>
                              </div>
                         </div>
                    </header>
          )
     }
}
