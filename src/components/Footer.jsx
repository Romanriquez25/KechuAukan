import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="cajaRRSS">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookF className="iconoRRSS" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram className="iconoRRSS" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter className="iconoRRSS" />
            </a>
        </div>
    );
}

export default Footer;