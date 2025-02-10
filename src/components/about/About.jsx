import './about.css'
import image from '../../assets/me-image-2.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from 'framer-motion';
const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <motion.div className="top_section"
                    initial={{ y: -55, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h4 className='text-light'>
                        Get To Know
                    </h4>
                    <h2 >
                        About Me
                    </h2>
                </motion.div>
                <div className="content">
                    <div className="left">
                        <img src={image} alt="image" />
                    </div>
                    <div className="right">
                        <div className="cards">
                            <div className="card">
                                <FaAward className='card-icon' />
                                <h5>Experience</h5>
                                <small className='text-light'>2+ years working</small>
                            </div>
                            <div className="card">
                                <FiUsers className='card-icon' />
                                <h5>
                                    Clients
                                </h5>
                                <small className='text-light'>100+ worldwide</small>
                            </div>
                            <div className="card">
                                <VscFolderLibrary className='card-icon' />
                                <h5>Projects</h5>
                                <small className='text-light'>30+ completed</small>
                            </div>
                        </div>
                        <p className='text-light'>Iam Passionate and creative front-end developer with over 2 years of experience
                            designing and developing interactive web applications. Proficient in HTML, CSS,
                            JavaScript, and modern frameworks like React.js . Adept at enhancing user
                            experience and collaborating with design teams to deliver accurate and responsive
                            solutions.</p>
                        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
