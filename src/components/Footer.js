import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";







const Footer = () => {



    return (
        <div class="footer_box">
        <div class="wrapper">
        <div class="footer_box_socials">
                <span class="footer_box_text">FOLLOW US</span>
            </div>
            <div class="footer_box_icon">
                <div class="footer_socials">
                    <Link>
                        <AiFillGithub />
                    </Link>
                </div>
                <div class="footer_socials">
                    <Link>
                        <FiTwitter  />
                    </Link>
                </div>
                <div class="footer_socials">
                    <Link>
                        <FaFacebookF />
                    </Link>  
                </div>
                <div class="footer_socials">
                    <Link>
                        <FaGoogle />
                    </Link>
                </div>     
            </div>
            <div class="footer_box_copyrig">
                <p>Copyright Masum Parvej, All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;