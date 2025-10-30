import hero from '../assets/hero.png'; 
import '../Components/Home.css';

function Home() {
  return (
    <div className="hero-img">
      <img src={hero} alt="header" />
    </div>
  );
}

export default Home;
