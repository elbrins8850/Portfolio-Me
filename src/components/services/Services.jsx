import './services.css'
import { FaCode } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { motion } from 'framer-motion';
const Services = () => {
    return (
        <section id='sevices'>
            <motion.div className="top_section"
             initial={{y:-150, opacity:0}}
             animate={{y:0, opacity:1}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:1}}
            >
                <h4 className='text-light'>
                    What I offer
                </h4>
                <h2 >
                    Services
                </h2>
            </motion.div>
            <div className="container ss-container">
                <motion.div className="cards"
                  initial={{x:150, opacity:0}}
                  whileInView={{x:0, opacity:1}}
                  transition={{duration:1.5}}
                >
                    <div className="card">
                        <MdDesignServices className='card-icon' />
                        <h5>Web Design</h5>
                        <small className='text-light'>Web Design is  developers create, edit, and manipulate the visual elements and layout of websites.</small>
                    </div>
                    <div className="card">
                        <IoRocket className='card-icon' />
                        <h5>
                            Fast Performance
                        </h5>
                        <small className='text-light'>Performance refers to the effectiveness or efficiency of a system in completing a task or process.</small>
                    </div>
                    <div className="card">
                        <FaCode className='card-icon' />
                        <h5>Clean Code</h5>
                        <small className='text-light'>Clean code is written in a way that makes it simple, concise, and expressive. </small>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Services
