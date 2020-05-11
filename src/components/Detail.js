import React, { Component } from 'react'
import axios from 'axios'

export default class Detail extends Component {
     constructor(props) {
          super(props)
          this.state = {
               posts: []
          }
     }

     componentDidMount() {
          axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
               if (data && data.data && data.data.length) {
                    this.setState({
                         posts: data.data
                    })
               }
          }).catch((err) => {
               console.log(err)
          })
     }
     render() {
          return (
               <>
                    <div className="slider">
                         <div className="display-table  center-text">
                              <h1 className="title display-table-cell"><b>DESIGN</b></h1>
                         </div>
                    </div>
                    <section className="post-area section">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-8 col-md-12 no-right-padding">
                                        <div className="main-post">
                                             <div className="blog-post-inner">
                                                  <div className="post-info">
                                                       <div className="left-area">
                                                            <a className="avatar" href="google.com"><img src="images/avatar-1-120x120.jpg" alt="" /></a>
                                                       </div>
                                                       <div className="middle-area">
                                                            <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                            <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                       </div>
                                                  </div>
                                                  <h3 className="title"><a href="google.com">
                                                       {
                                                            this.state.posts.map(item => {
                                                                 return (
                                                                      <b key={item.id}>{item.title}</b>
                                                                 )
                                                            })
                                                       }
                                                  </a></h3>
                                                  <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                  nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                                  <div className="post-image"><img src="images/blog-1-1000x600.jpg" alt="" /></div>
                                                  <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                  nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                                  <ul className="tags">
                                                       <li><a href="google.com">Mnual</a></li>
                                                       <li><a href="google.com">Liberty</a></li>
                                                       <li><a href="google.com">Recommendation</a></li>
                                                       <li><a href="google.com">Inspiration</a></li>
                                                  </ul>
                                             </div>
                                             <div className="post-icons-area">
                                                  <ul className="post-icons">
                                                       <li><a href="google.com"><i className="ion-heart"></i>57</a></li>
                                                       <li><a href="google.com"><i className="ion-chatbubble"></i>6</a></li>
                                                       <li><a href="google.com"><i className="ion-eye"></i>138</a></li>
                                                  </ul>
                                                  <ul className="icons">
                                                       <li>SHARE : </li>
                                                       <li><a href="google.com"><i className="ion-social-facebook"></i></a></li>
                                                       <li><a href="google.com"><i className="ion-social-twitter"></i></a></li>
                                                       <li><a href="google.com"><i className="ion-social-pinterest"></i></a></li>
                                                  </ul>
                                             </div>
                                             <div className="post-footer post-info">
                                                  <div className="left-area">
                                                       <a className="avatar" href="google.com"><img src="images/avatar-1-120x120.jpg" alt="" /></a>
                                                  </div>
                                                  <div className="middle-area">
                                                       <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                       <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-12 no-left-padding">
                                        <div className="single-post info-area">
                                             <div className="sidebar-area about-area">
                                                  <h4 className="title"><b>ABOUT BONA</b></h4>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
								Ut enim ad minim veniam</p>
                                             </div>
                                             <div className="sidebar-area subscribe-area">
                                                  <h4 className="title"><b>SUBSCRIBE</b></h4>
                                                  <div className="input-area">
                                                       <form>
                                                            <input className="email-input" type="text" placeholder="Enter your email" />
                                                            <button className="submit-btn" type="submit"><i className="icon ion-ios-email-outline"></i></button>
                                                       </form>
                                                  </div>
                                             </div>
                                             <div className="tag-area">
                                                  <h4 className="title"><b>TAG CLOUD</b></h4>
                                                  <ul>
                                                       <li><a href="google.com">Manual</a></li>
                                                       <li><a href="google.com">Liberty</a></li>
                                                       <li><a href="google.com">Recomendation</a></li>
                                                       <li><a href="google.com">Interpritation</a></li>
                                                       <li><a href="google.com">Manual</a></li>
                                                       <li><a href="google.com">Liberty</a></li>
                                                       <li><a href="google.com">Recomendation</a></li>
                                                       <li><a href="google.com">Interpritation</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className="recomended-area section">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-4 col-md-6">
                                        <div className="card h-100">
                                             <div className="single-post post-style-1">
                                                  <div className="blog-image"><img src="images/alex-lambley-205711.jpg" alt="" /></div>
                                                  <a className="avatar" href="google.com"><img src="images/icons8-team-355979.jpg" alt="" /></a>
                                                  <div className="blog-info">
                                                       <h4 className="title"><a href="google.com"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</b></a></h4>
                                                       <ul className="post-footer">
                                                            <li><a href="google.com"><i className="ion-heart"></i>57</a></li>
                                                            <li><a href="google.com"><i className="ion-chatbubble"></i>6</a></li>
                                                            <li><a href="google.com"><i className="ion-eye"></i>138</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <div className="card h-100">
                                             <div className="single-post post-style-1">
                                                  <div className="blog-image"><img src="images/caroline-veronez-165944.jpg" alt="" /></div>
                                                  <a className="avatar" href="google.com"><img src="images/icons8-team-355979.jpg" alt="" /></a>
                                                  <div className="blog-info">
                                                       <h4 className="title"><a href="google.com"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</b></a></h4>
                                                       <ul className="post-footer">
                                                            <li><a href="google.com"><i className="ion-heart"></i>57</a></li>
                                                            <li><a href="google.com"><i className="ion-chatbubble"></i>6</a></li>
                                                            <li><a href="google.com"><i className="ion-eye"></i>138</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <div className="card h-100">
                                             <div className="single-post post-style-1">
                                                  <div className="blog-image"><img src="images/marion-michele-330691.jpg" alt="" /></div>
                                                  <a className="avatar" href="google.com"><img src="images/icons8-team-355979.jpg" alt="" /></a>
                                                  <div className="blog-info">
                                                       <h4 className="title"><a href="google.com"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</b></a></h4>
                                                       <ul className="post-footer">
                                                            <li><a href="google.com"><i className="ion-heart"></i>57</a></li>
                                                            <li><a href="google.com"><i className="ion-chatbubble"></i>6</a></li>
                                                            <li><a href="google.com"><i className="ion-eye"></i>138</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    <section className="comment-section">
                         <div className="container">
                              <h4><b>POST COMMENT</b></h4>
                              <div className="row">
                                   <div className="col-lg-8 col-md-12">
                                        <div className="comment-form">
                                             <form method="post">
                                                  <div className="row">
                                                       <div className="col-sm-6">
                                                            <input type="text" aria-required="true" name="contact-form-name" className="form-control" placeholder="Enter your name" aria-invalid="true" required />
                                                       </div>
                                                       <div className="col-sm-6">
                                                            <input type="email" aria-required="true" name="contact-form-email" className="form-control" placeholder="Enter your email" aria-invalid="true" required />
                                                       </div>
                                                       <div className="col-sm-12">
                                                            <textarea name="contact-form-message" rows="2" className="text-area-messge form-control" placeholder="Enter your comment" aria-required="true" aria-invalid="false"></textarea >
                                                       </div>
                                                       <div className="col-sm-12">
                                                            <button className="submit-btn" type="submit" id="form-submit"><b>POST COMMENT</b></button>
                                                       </div>
                                                  </div>
                                             </form>
                                        </div>
                                        <h4><b>COMMENTS(12)</b></h4>
                                        <div className="commnets-area">
                                             <div className="comment">
                                                  <div className="post-info">
                                                       <div className="left-area">
                                                            <a className="avatar" href="google.com"><img src="images/avatar-1-120x120.jpg" alt="" /></a>
                                                       </div>
                                                       <div className="middle-area">
                                                            <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                            <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                       </div>
                                                       <div className="right-area">
                                                            <h5 className="reply-btn" ><a href="google.com"><b>REPLY</b></a></h5>
                                                       </div>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam</p>
                                             </div>
                                             <div className="comment">
                                                  <h5 className="reply-for">Reply for <a href="google.com"><b>Katy Lui</b></a></h5>
                                                  <div className="post-info">
                                                       <div className="left-area">
                                                            <a className="avatar" href="google.com"><img src="images/avatar-1-120x120.jpg" alt="" /></a>
                                                       </div>
                                                       <div className="middle-area">
                                                            <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                            <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                       </div>
                                                       <div className="right-area">
                                                            <h5 className="reply-btn" ><a href="google.com"><b>REPLY</b></a></h5>
                                                       </div>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam</p>
                                             </div>
                                        </div>
                                        <div className="commnets-area ">
                                             <div className="comment">
                                                  <div className="post-info">
                                                       <div className="left-area">
                                                            <a className="avatar" href="google.com"><img src="images/avatar-1-120x120.jpg" alt="" /></a>
                                                       </div>
                                                       <div className="middle-area">
                                                            <a className="name" href="google.com"><b>Katy Liu</b></a>
                                                            <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                                                       </div>
                                                       <div className="right-area">
                                                            <h5 className="reply-btn" ><a href="google.com"><b>REPLY</b></a></h5>
                                                       </div>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Ut enim ad minim veniam</p>
                                             </div>
                                        </div>
                                        <a className="more-comment-btn" href="google.com"><b>VIEW MORE COMMENTS</b></a>
                                   </div>
                              </div>
                         </div>
                    </section>
               </>
          )
     }
}
