import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './footer.css'
const Footer = () => {
    return (
        <section>
            <div className=" f-container text-light">
                <div className="logo">
                    <a href="#home"><h2>Mahmoud-Dev</h2></a>
                </div>
                <ul className="links ">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#sevices">Services</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="iconn">
                    <a href="https://www.linkedin.com/in/mahmud-elsheikh-7575b1213/" target='_blank'><FaLinkedin /></a>
                    <a href="https://github.com/elbrins8850" target='_blank'><FaGithub /></a>
                    <a href="https://www.facebook.com/profile.php?id=61564962798013" target='_blank'><FaFacebookF /></a>
                </div>
            </div>
        </section>
    )
}
export default Footer
