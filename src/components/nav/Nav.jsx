import './nav.css'
import { motion } from 'framer-motion';
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from 'react-icons/lu';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
    const [active,Setactive]=useState("#");
    return (
        <motion.nav
        initial={{x:-1000, opacity:0}}
        animate={{x:-150, opacity:1}}
        whileInView={{x:-150, opacity:1}}
        transition={{duration:1}}
        >
            <a href="#" className={active === "#"? "active":" "} onClick={()=>Setactive("#")}><IoHomeOutline/></a>
            <a href="#about" className={active === "#about"? "active":" "} onClick={()=>Setactive("#about")}><LuUserRound/></a>
            <a href="#sevices"className={active === "#sevices"? "active":" "} onClick={()=>Setactive("#sevices")}><BiBook/></a>
            <a href="#project"className={active === "#project"? "active":" "} onClick={()=>Setactive("#project")}><RiServiceLine/></a>
            <a href="#contact"className={active === "#contact"? "active":" "} onClick={()=>Setactive("#contact")}><BiMessageSquareDetail/></a>
        </motion.nav>
    )
}
export default Nav
