import { useState, useEffect } from "react";
import "@/App.css";

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" data-testid="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" data-testid="lightbox-close">✕</span>
          <img src={lightboxImage} alt="Enlarged view" />
        </div>
      )}

      {/* Hero Section */}
      <section className="hero" data-testid="hero-section">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-tag">Mechanical Engineering · Northeastern University</div>
          <h1>Ashvik<br /><span>Rajeev</span></h1>
          <p className="hero-sub">
            Sophomore MechE with hands-on experience in CAD modeling, materials testing, and design-to-manufacture. Proficient in SolidWorks and PTC Creo.
          </p>
          <div className="hero-links">
            <a href="#projects" className="btn btn-primary" data-testid="view-projects-btn">View Projects</a>
            <a href="https://www.linkedin.com/in/ashvik-rajeev-b60289260/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" data-testid="linkedin-btn">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Skills Bar */}
      <div className="skills-bar" data-testid="skills-bar">
        <span className="skill-tag highlight">SolidWorks</span>
        <span className="skill-tag highlight">PTC Creo</span>
        <span className="skill-tag">AutoCAD</span>
        <span className="skill-tag">3D Printing</span>
        <span className="skill-tag">Laser Cutting</span>
        <span className="skill-tag">MATLAB</span>
        <span className="skill-tag">Instron Testing</span>
        <span className="skill-tag">Python</span>
        <span className="skill-tag">Material Testing</span>
        <span className="skill-tag">Error Analysis</span>
      </div>

      {/* Projects Section */}
      <section id="projects" data-testid="projects-section">
        <div className="section-label">Work</div>
        <h2 className="section-title">Projects</h2>

        {/* Project 1: Rocket Injector */}
        <div className="project" data-testid="project-rocket-injector">
          <div className="project-header">
            <h3 className="project-title">Liquid Rocket Injector Assembly</h3>
            <div className="project-meta">
              <span className="badge badge-green">SolidWorks</span>
              <span className="badge badge-purple">Aerospace</span>
              <span className="badge badge-gray">Dec 2025 – Present</span>
            </div>
          </div>
          <p className="project-desc">
            Recreated a 4-part liquid rocket fuel injector assembly in SolidWorks from engineering drawings. 
            The injector operates at 100–200 psi and uses Inconel 718 for thermal stability. 
            Built parametric models of the top manifold, base manifold, table top orifices, and converging-diverging chamber throat, 
            then assembled with concentric and coincident mates. Applied circular patterns for the 30-element impinging orifice layout 
            and used spline curves and Shell feature for the complex nozzle geometry.
          </p>
          <div className="img-grid img-grid-rocket">
            <div 
              className="img-wrap img-featured" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/27og3rn3_rocket-full-assembly.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/27og3rn3_rocket-full-assembly.jpg" 
                alt="Full Assembly"
                data-testid="rocket-full-assembly"
              />
              <div className="img-caption">Full Assembly</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/gioe6696_image.png")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/gioe6696_image.png" 
                alt="Top Orifice Model"
                data-testid="rocket-top-orifice"
              />
              <div className="img-caption">Top Orifice Model</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/fojy47lt_rocket-top-manifold.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/fojy47lt_rocket-top-manifold.jpg" 
                alt="Top Manifold"
                data-testid="rocket-top-manifold"
              />
              <div className="img-caption">Top Manifold</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/we0hocuz_rocket-base-manifold.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/we0hocuz_rocket-base-manifold.jpg" 
                alt="Base Manifold"
                data-testid="rocket-base-manifold"
              />
              <div className="img-caption">Base Manifold</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/7xecpvz7_rocket-chamber-throat.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/7xecpvz7_rocket-chamber-throat.jpg" 
                alt="Chamber Throat"
                data-testid="rocket-chamber-throat"
              />
              <div className="img-caption">Chamber Throat</div>
            </div>
          </div>
        </div>

        {/* Project 2: Tilt-a-Turt */}
        <div className="project" data-testid="project-tilt-a-turt">
          <div className="project-header">
            <h3 className="project-title">Tilt-a-Turt — Board Game Design</h3>
            <div className="project-meta">
              <span className="badge badge-blue">3D Printing</span>
              <span className="badge badge-orange">Team Project</span>
              <span className="badge badge-gray">Engineering Design</span>
            </div>
          </div>
          <p className="project-desc">
            4-person team engineering design project. Designed and fabricated a tiltable marble maze board game from client brief 
            to functional prototype. The board features magnetic removable walls with 4 unique geometries, laser-cut play surface 
            with filleted marble holes, and a convex underside for gameplay challenge. All parts were 3D printed on a Prusa i3 MK3S 
            within a 210×210mm build volume constraint. Presented functional prototype to a real client with positive feedback.
          </p>
          <div className="img-grid img-grid-2x2">
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/c94usy4q_tilt-play-surface.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/c94usy4q_tilt-play-surface.jpg" 
                alt="Play Surface"
                data-testid="tilt-play-surface"
              />
              <div className="img-caption">Play Surface</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/rn0vveqk_tilt-convex-underside.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/rn0vveqk_tilt-convex-underside.jpg" 
                alt="Convex Underside"
                data-testid="tilt-convex-underside"
              />
              <div className="img-caption">Convex Underside</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/10fhgt0v_tilt-wall-geometry.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/10fhgt0v_tilt-wall-geometry.jpg" 
                alt="Wall Geometry"
                data-testid="tilt-wall-geometry"
              />
              <div className="img-caption">Wall Geometry</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/mxhlopwj_tilt-wall-section.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/mxhlopwj_tilt-wall-section.jpg" 
                alt="Wall Section"
                data-testid="tilt-wall-section"
              />
              <div className="img-caption">Wall Section</div>
            </div>
          </div>
        </div>

        {/* Project 3: Robotic Arm */}
        <div className="project" data-testid="project-robotic-arm">
          <div className="project-header">
            <h3 className="project-title">Robotic Arm — Shoulder Actuator Subsystem</h3>
            <div className="project-meta">
              <span className="badge badge-green">SolidWorks</span>
              <span className="badge badge-cyan">Robotics Club</span>
              <span className="badge badge-gray">Northeastern</span>
            </div>
          </div>
          <p className="project-desc">
            Contributed SolidWorks CAD modeling to a robotic arm shoulder actuator subsystem as part of Northeastern's robotics club, 
            working alongside senior engineers. Helped model motor mounts, planetary actuator housings, gear reduction stages, 
            and bevel gear assemblies. Assisted with actuator assembly layouts to verify component fit, alignment, and clearance.
          </p>
          <div className="img-grid img-grid-2x2">
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/j04sozmy_shoulder%20prototype%20%281%29.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/j04sozmy_shoulder%20prototype%20%281%29.jpg" 
                alt="Full Assembly"
                data-testid="robotic-arm-full-assembly"
              />
              <div className="img-caption">Full Assembly</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/s7vmhsdj_robo-actuator.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/s7vmhsdj_robo-actuator.jpg" 
                alt="Planetary Actuator"
                data-testid="robotic-arm-actuator"
              />
              <div className="img-caption">Planetary Actuator</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/kyq9xkx4_robo-bevel-gear.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/kyq9xkx4_robo-bevel-gear.jpg" 
                alt="Bevel Gears"
                data-testid="robotic-arm-bevel-gear"
              />
              <div className="img-caption">Bevel Gears</div>
            </div>
            <div 
              className="img-wrap" 
              onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/tpu2zm3f_robo-reducer.jpg")}
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-converter-5/artifacts/tpu2zm3f_robo-reducer.jpg" 
                alt="Gear Reducer"
                data-testid="robotic-arm-reducer"
              />
              <div className="img-caption">Gear Reducer</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-testid="about-section">
        <div className="section-label">Background</div>
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>sophomore Mechanical Engineering student at Northeastern University</strong> (Class of 2028), actively pursuing a co-op for Fall 2026. My coursework includes Mechanics of Materials, Thermodynamics, Dynamics, and Materials Science.
            </p>
            <p>
              My hands-on experience spans <strong>parametric CAD modeling</strong> in SolidWorks and PTC Creo, <strong>materials testing</strong> using Instron systems, and <strong>design-to-manufacture</strong> with 3D printing and laser cutting.
            </p>
            <p>
              In my Mechanics of Materials lab, I conducted tensile, torsion, bending, and buckling tests to extract Young's modulus, yield strength, and ultimate strength — validating results against theoretical models using MATLAB.
            </p>
            <p>
              Outside of engineering, I'm a <strong>2× Marching Band National Champion</strong> saxophonist with 9+ years of experience in competitive performance ensembles.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-num">3+</div>
              <div className="stat-label">CAD Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">2</div>
              <div className="stat-label">CAD Platforms</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">4</div>
              <div className="stat-label">Part Assembly</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">2×</div>
              <div className="stat-label">National Champion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <p>© 2026 Ashvik Rajeev. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
