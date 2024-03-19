import React from "react";
import './MyFooter.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const MyFooter = () => {
    return (
    <footer className="site-footer">
        <div className="container">
             <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright © 2024 All Rights Reserved by 
                        <a href="#something"> Scanfcode</a>.
                    </p>
                </div>
                <div className="social-icons-center">
                    <ul className="social-icons">
                        <li><a className="facebook" href="#something"><FaFacebookF /></a></li>
                        <li><a className="twitter" href="#something"><FaTwitter /></a></li>
                        <li><a className="instagram" href="#something"><FaInstagram /></a></li>
                        <li><a className="linkedin" href="#something"><FaLinkedin /></a></li>   
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default MyFooter;