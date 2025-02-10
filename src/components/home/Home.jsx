import './home.css'
import me from '../../assets/me-image.png'
import cv from '../../assets/Cv-mahmoud.pdf'
import Links from "./Links";
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <div className="home" id='home'>
            <div className="container h-container">
                <motion.h4
                 initial={{y:-200, opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{duration:1}}
                >
                    Hello I&apos;m

                </motion.h4>
                <motion.h1
                initial={{y:-200, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1}}
                >Mahmoud Ashraf</motion.h1>
                <motion.h4 className="text-light"
                initial={{y:-200, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1}}
                >Frontend Developer</motion.h4>
                <div className="btns">
                    <motion.a href={cv} className="btn" download
                     initial={{x:-150, opacity:0}}
                     whileInView={{x:0, opacity:1}}
                     transition={{duration:1}}
                    >Download Cv</motion.a>
                    <motion.a href="#contact" className="btn btn-primary"
                     initial={{x:150, opacity:0}}
                     whileInView={{x:0, opacity:1}}
                     transition={{duration:1}}
                    >Let&apos;s Talk</motion.a>
                </div>

                <motion.div className="me"
                 initial={{x:150, opacity:0}}
                 whileInView={{x:0, opacity:1}}
                 transition={{duration:1.5}}
                >
                    <img src={me} className="image" alt="image" />
                </motion.div>
            </div>
            <motion.a href="#about" className="scroll_down"
                initial={{x:250, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1.5}}
            >Scroll Down</motion.a>
            <motion.div
             initial={{x:-500, opacity:0}}
             whileInView={{x:0, opacity:1}}
             transition={{duration:1}}
            >
            <Links />
            </motion.div>
        </div>
    )
}
export default Home
