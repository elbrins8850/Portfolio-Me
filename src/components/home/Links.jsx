import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";

const Links = () => {
    return (
        <div className="home_sochials">
            <a href="https://www.linkedin.com/in/mahmud-elsheikh-7575b1213/" target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/elbrins8850" target='_blank'><FaGithub/></a>
            <a href="https://www.facebook.com/profile.php?id=61564962798013" target='_blank'><FaFacebookF/></a>
        </div>
    )
}
export default Links
