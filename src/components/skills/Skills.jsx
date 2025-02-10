import './skills.css'
import html from '../../assets/html.svg'
import css from '../../assets/css3.svg'
import js from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import github from '../../assets/github.svg'
import tilwand from '../../assets/tailwindcss.svg'
import redux from '../../assets/redux.svg'
import bootstrap from '../../assets/bootstrap.svg'
import { motion } from 'framer-motion'

const Skills = () => {
    const allSkiils = [
        {
            id: 1,
            icon: html,
            title: 'Html',
            text: ' structured lists '
        },
        {
            id: 2,
            icon: css,
            title: 'Css',
            text: 'User Interface'
        },
        {
            id: 3,
            icon: js,
            title: 'JasvaScript',
            text: 'Interaction'
        },
        {
            id: 4,
            icon: react,
            title: 'React',
            text: 'Framework'
        },
        {
            id: 5,
            icon: github,
            title: 'Github',
            text: 'version control'
        },
        {
            id: 6,
            icon: tilwand,
            title: 'Tailwindcss',
            text: 'User Interface'
        },
        {
            id: 7,
            icon: redux,
            title: 'Redux',
            text: 'library'
        },
        {
            id: 8,
            icon: bootstrap,
            title: 'Bootstrap',
            text: 'User Interface'
        },
    ]
    return (
        <section id='skill'>
            <motion.div className="top_section"
             initial={{y:-150, opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:1}}
            >
                <h4 className='text-light'>
                    What Skills I have
                </h4>
                <h2 >
                    My Expreience
                </h2>
            </motion.div>
            <div className="container s-container"
             
            >
                {allSkiils.map((item) => {
                    return (
                        <motion.article className='card' key={item.id}
                        
                        initial={{x:-150, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1}}
                        >
                            <div className="icon">
                                <img src={item.icon} />
                            </div>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <h5 className='text-light'>{item.text}</h5>
                            </div>
                        </motion.article>
                    )
                })}
            </div>
        </section>
    )
}
export default Skills
