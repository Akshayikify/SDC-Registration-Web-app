import React from 'react';
export default function Footer(){
    return(
        <footer className='ftr'>
            <div className='container'>
                <div className="firstblock">
                    <h5>SDC</h5>
                    <ul>
                       <li>About US</li>
                       <li>Achievemnts</li>
                       <li>Members</li>
                    </ul>
                </div>
                <div className="secondblock">
                    <h5>Contact US</h5>
                    <ul>
                       <li>Email:SDC20334@tech.in</li>
                       <li>Address:MVJCE,Bengaluru</li>
                    </ul>
                </div>
                <div className="lastblock">
                    <h5>Follow US:</h5>
                    <ul>
                       <li><i className="fa-brands fa-linkedin"></i></li>
                       <li><i className="fa-brands fa-facebook"></i></li>
                       <li><i className="fa-brands fa-instagram"></i></li>
                       <li><i className="fa-brands fa-youtube"></i></li>
                       <li><i className="fa-brands fa-x-twitter"></i></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
                <div className="copyright">
                    <p><i className="fa-solid fa-copyright"></i> SDC All rights reserved</p>
                </div>
        </footer>
    )
}