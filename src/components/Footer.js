import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer_box">
        <div className="wrapper">
        <div className="footer_box_socials">
                <span className="footer_box_text">ПОДПИСЫВАЙТЕСЬ НА НАС</span>
            </div>
            <div className="footer_box_icon">
                <div className="footer_socials">
                    <Link>
                        <AiFillGithub />
                    </Link>
                </div>
                <div className="footer_socials">
                    <Link>
                        <FiTwitter  />
                    </Link>
                </div>
                <div className="footer_socials">
                    <Link>
                        <FaFacebookF />
                    </Link>  
                </div>
                <div className="footer_socials">
                    <Link>
                        <FaGoogle />
                    </Link>
                </div>     
            </div>
            <div className="footer_box_copyrig">
                <p>Copyright Masum Parvej, All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;