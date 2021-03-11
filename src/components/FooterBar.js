import React, { Component} from 'react'


export default class FooterBar extends Component {
    render() {

        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        return (
            <div>
              <div className="container-fluid pb-0 mb-0 justify-content-center body-width">
                <footer>
                    <div className="row justify-content-center py-5">
                            <div className="col-xl-8 col-sm-4 mb-2 my-auto mx-auto a">
                                <h3 className="mb-md-0 mb-5 logo">Book<span>Switch</span></h3>
                                <small className="rights"><span>&#174;</span> All Rights Reserved.</small>
                                <br/><h6 className="mb-2 bold-text py-2"><b>Contact Us</b></h6>
                                <p className="mb-1">contact@bookswitch.com</p>
                            </div>
                    </div>
                    <div className="row justify-content-center">
                        <p>
                            <img className="my-3 " width="90px" src="/assets/800px-MERN-logo.png" alt="mernlogo"/>
                            <span className="bold-text py-1">IRONHACKERS</span> 
                        </p>      

                        <div className="col-md-4 py-1 ">
                            <h6 className="mb-2 bold-text"><b>Georgina Morales</b></h6><small> georgina@bookswitch.com</small>
                        </div>
                        <div className="col-md-4 py-1 " >
                            <h6 className="mb-2 bold-text"><b>Erdem Taskin</b></h6><small>erdem@bookswitch.com</small>
                        </div>
                    </div>        
                </footer>
            </div>
        </div>
        )
    }
}