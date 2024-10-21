import './App.css';
import './components/styles.css';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';
import BannerFirst from "./components/bannerFirst/BannerFirst";
import AboutMe from "./components/bannerFirst/AboutMe";

function App() {
    return (
        <ThemeProvider>
            <Container>
                <Navbar />
                <BannerFirst />
                <AboutMe />


                <ThemeSwitcher />
            </Container>
        </ThemeProvider>
    );
}

export default App;
