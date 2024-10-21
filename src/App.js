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

function App() {
    return (
        <ThemeProvider>
            <Container>
                <Navbar />
                <BannerFirst />
                <AboutMe />
                <Services />
                <MyProjects />

            </Container>
        </ThemeProvider>
    );
}

export default App;
