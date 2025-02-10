import './projects.css'
import movie from '../../assets/project/1.png';
import ecommerce from '../../assets/project/2.png';
import mac from '../../assets/project/3.png';
import Cv from '../../assets/project/4.png';
import design from '../../assets/project/5.png';
import senior from '../../assets/project/6.png';
import { SiLivewire } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import { motion } from 'framer-motion';
const data = [
    {
        id: 1,
        github: "https://github.com/elbrins8850/ecommerce-react",
        live: "https://elbrins8850.github.io/ecommerce-react/",
        image: ecommerce,
    },
    {
        id: 2,
        github: "https://github.com/elbrins8850/move",
        live: "https://move-self.vercel.app/",
        image: movie,
    },
    {
        id: 3,
        github: "https://github.com/elbrins8850/templet-4",
        live: "https://full-blue.vercel.app/",
        image: mac,
    },
    {
        id: 4,
        github: "https://github.com/elbrins8850/templet-3",
        live: "https://senior-phi.vercel.app/",
        image: senior,
    },
    {
        id: 5,
        github: "https://github.com/elbrins8850/templet-5",
        live: "https://advansid.vercel.app/",
        image: design,
    },
    {
        id: 6,
        github: "https://github.com/elbrins8850/CV",
        live: "https://elbrins8850.github.io/CV/",
        image: Cv,
    },
    
]
const Projects = () => {
    return (
        <section id='project'>
            <motion.div className="top_section"
              initial={{y:-150, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:1}}
            >
                <h4 className='text-light'>
                    My Recent Work
                </h4>
                <h2 >
                    Projects
                </h2>
            </motion.div>
            <div className="container p-container">
                {data.map((item) => {
                    return(
                        <article className='card' key={item.id}>
                        <div className="img">
                            <img src={item.image} />
                        </div>
                        <div className="icon">
                            <a href={item.github} target='_blank' title='Git Repo'><FaGithub /></a>
                            <a href={item.live} target='_blank' title='Live Demo'><SiLivewire /></a>
                        </div>
                    </article>
                    )
                })}
            </div>
        </section>
    )
}
export default Projects
