import LogoSection from './components/LogoSection.jsx';
import Navbar from './components/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
        </>
    );
};

export default App;
