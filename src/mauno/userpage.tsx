import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDribbble, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./userpage.css";

export const Userpage = () => {
    return (
        <div className="container mt-3">
            <div className="col-md-4">
                <div className="card p-3 py-4">
                    <div className="text-center">
                        <img src="https://placedog.net/200" width="100" className="rounded-circle" alt="User"/>
                    </div>
                    <div className="text-center mt-3">
                        <span className="bg-secondary p-1 px-4 rounded text-white">Verified</span>
                        <h5 className="mt-2 mb-0">Samuel Pitko</h5>
                        <span>UI/UX Designer</span>
                        <div className="px-4 mt-1">
                            <p className="fonts">Samuel Pitko is a talented UI/UX Designer with a flair for creating intuitive and engaging user interfaces.</p>
                        </div>
                        <ul className="social-list">
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faDribbble} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faGoogle} /></li>
                        </ul>
                        <div className="buttons">
                            <button className="btn btn-outline-primary px-4">Message</button>
                            <button className="btn btn-primary px-4 ms-3">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Userpage;
