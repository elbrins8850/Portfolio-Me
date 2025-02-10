import Home from "./components/home/Home.jsx";
import Services from "./components/services/Services.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Nav from "./components/nav/Nav.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Home/>
            <Nav/>
            <About/>
            <Skills/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default App
