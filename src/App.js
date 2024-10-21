import './App.css';
import './components/styles.css';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';

function App() {
    return (
        <ThemeProvider>
            <Container>
                <Navbar />



                <ThemeSwitcher />
            </Container>
        </ThemeProvider>
    );
}

export default App;
