import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { motion } from 'framer-motion';
const data = [
    {
        id: 1,
        icon: <MdOutlineEmail />,
        title: 'Email',
        link: "elbrins8850@gmail.com",
        send: "mailto:test@gmail.com",
    },
    {
        id: 2,
        icon: <RiMessengerFill />,
        title: 'Messenger',
        link: "Mahmoud",
        send: "https://m.me/CodeRank ",
    },
    {
        id: 1,
        icon: <BsWhatsapp />,
        title: 'Whatsapp',
        link: "01115882130",
        send: "https://api.whatsapp.com/send?phone=201115882130",
    },
];


const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_mp74ucm', 'template_3e5lfy8', form.current, {
          publicKey: '1sRFuY5HC38Eizs7D',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <section id='contact'>
            <motion.div className="top_section"
               initial={{y:-150, opacity:0}}
               whileInView={{y:0, opacity:1}}
               transition={{duration:1}}
            >
                <h4 className='text-light'>
                    Get In Touch
                </h4>
                <h2 >
                    Contact Me
                </h2>
            </motion.div>
            <div className="container cc-container">
                <article>
                    {data.map((item) => {
                        return (
                            <motion.div className="cards" key={item.id}
                            initial={{x:150, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{duration:1.5}}
                            >
                                <div className="card">
                                    <h3> {item.icon}</h3>
                                    <h5 >{item.title}</h5>
                                    <h5 className="text-light title">{item.link}</h5>
                                    <h5 className="link"><a href={item.send} className='text-primary' target='_blank'>Send Message</a>
                                    </h5>
                                </div>
                            </motion.div>
                        )
                    })}
                </article>
                <motion.div className="content"
                  initial={{x:150, opacity:0}}
                  whileInView={{x:0, opacity:1}}
                  transition={{duration:1.5}}
                >
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Your Name" name='name'/>
                        <input type="email" placeholder="Your Email"name='email' />
                        <textarea name="message" id="" placeholder="send message" rows={10}></textarea>
                        <button  className="btn btn-primary" >Send</button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
export default Contact
