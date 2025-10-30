import '../Components/About.css';
import AboutShowcase from '../Components/AboutShowcase';
import Skills from '../Components/Skills';
import about from '../assets/about.png';
import deepwork from '../assets/deepwork.png';
function About() {
  return (
    <>
      <div id="about" className="container">
        <div className="about-image">
          <img src={about} alt="about" />
        </div>
        <div className="about-content">
          <h5>ABOUT ME</h5>
          <h2>Evolving to create impactful experiences</h2>
          <p>From Psychology to Product Design</p>
          <p>A New Path Beckons</p>
          <p>The Goal</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-left">
          <p>Who AM I</p>
          <h1>Be Consistent, Inquisitive, Adapt, and Repeat.</h1>
        </div>
        <div className="divider"></div>
        <div className="about-right">
          <p>
            My skillset is constantly evolving. I value open communication and believe a strong team thrives on
            shared learning. I’m always eager to contribute my knowledge and learn from others.
          </p>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-left">
          <p>
            I often encounter difficulties when beginning a new project or case study.
            However, as I navigate through the design process and its numerous variations,
            I consistently find myself energized and prepared to tackle any challenge.
          </p>
          <em>“If you don’t produce, you won’t thrive. No matter how talented or skilled you are.”</em>
          <div className="author">
            <img src={deepwork} alt="Deep Work" />
            <div>
              <h3>CARL NEWPORT</h3>
              <p>Deep Work</p>
            </div>
          </div>
        </div>
        <div className="skills-right">
          <Skills heading="Soft Skills"/>
          <Skills heading="Hard Skills" />
        </div>
      </div>
      <AboutShowcase />
    </>
  );
}
export default About;