// import './App.css';
import NavBar from './components/Navigation/nav';
import Hero from './components/Hero/hero'

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Hero
        title="Welcome to My Website"
        subtitle="We provide amazing services to help your business grow."
        backgroundImage="https://via.placeholder.com/1500x800"
        ctaText="Get Started"
        ctaLink="/get-started"
      />
      </div>
    </>
  );
}

export default App;
