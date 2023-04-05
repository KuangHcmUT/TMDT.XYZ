import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import '../Styles/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="address">
                    <h4>
                        <FaMapMarkerAlt /> Address
                    </h4>
                    <p>123 Main St</p>
                    <p>City, State ZIP</p>
                </div>
                <div className="contact">
                    <h4>
                        <FaPhone /> Contact
                    </h4>
                    <p>Phone: 555-555-5555</p>
                    <p>
                        <FaEnvelope /> Email: info@example.com
                    </p>
                </div>
                <div className="social">
                    <h4>Follow Us</h4>
                    <ul style={{ listStyle: 'none', paddingInlineStart: '0' }}>
                        <li>
                            <a href="https://www.facebook.com">
                                <FiFacebook /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com">
                                <FiTwitter /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                                <FiInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 iHome</p>
            </div>
        </footer>
    );
}

export default Footer;
