import './App.css';
import './components/styles.css';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';
import BannerFirst from "./components/bannerFirst/BannerFirst";
import AboutMe from "./components/bannerFirst/AboutMe";
import Services from "./components/services/Services";
import MyProjects from "./components/myProjects/MyProjects";
import Testimonials from "./components/testimonials/Testimonials";
import LetsDesign from "./components/letsDesign/LetsDesign";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <ThemeProvider>
            <Container>
                <Navbar />
                <BannerFirst />
                <AboutMe />
                <Services />
                <MyProjects />
                <Testimonials />
                <LetsDesign />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
