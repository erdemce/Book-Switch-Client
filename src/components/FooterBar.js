import React, { Component} from 'react'
import {Link} from 'react-router-dom'

export default class FooterBar extends Component {
    render() {

        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        return (
            <div >
                 <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div className="row my-5 justify-content-center py-5">
             <div className="col-11">
                 <div className="row">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 className="text-muted mb-md-0 mb-5 bold-text">Book Switch</h3>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                         <ul className="list-unstyled">
                             <li><Link to='/'>Home</Link></li>
                             <li>About</li>
                             <li>Search</li>
                             <li>Messages</li>
                         </ul>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>Contact Us</b></h6>
                         <p className="mb-1">contact@bookswitch.com</p>
                         <p>IRONHACKERS | Hufflepuff </p>

                     </div>
                 </div>
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> All Rights Reserved.</small>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 className="mt-55 mt-2 text-muted bold-text"><b>Georgina Morales</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> contact@bookswitch.com</small>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 className="text-muted bold-text"><b>Erdem Taskin</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> erdem@bookswitch.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>
            </div>
        )
    }
}
