import React, { Component } from 'react'
import { Header, SlideBar, Slider, Footer, Menu } from './components/layout/index'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppRouter from './routers'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Header */}
          <Header />
          {/*	End Header	*/}
          {/*	Body	*/}
          <div id="body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  {/* Menu */}
                  <Menu />
                  {/* end Menu */}
                </div>
              </div>
              <div className="row">
                <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                  {/*	Slider	*/}
                  <Slider />
                  {/*	End Slider	*/}
                  {/*	Feature Product	*/}
                  <AppRouter />
                  {/*	End Feature Product	*/}
                  {/*	Latest Product	*/}

                  {/*	End Latest Product	*/}
                </div>
                {/* Slidebar */}
                <SlideBar />
                {/* End Slidebar */}
              </div>
            </div>
          </div>
          {/*	End Body	*/}
          <Footer />
          {/*	End Footer	*/}
        </div>

      </BrowserRouter>
    )
  }
}
