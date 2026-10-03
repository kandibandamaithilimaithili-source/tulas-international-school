import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div>
      
  
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    ></div>
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TULAS</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus</a>
          <a href="#admissions">Admissions</a>
        </div>

       <button
  className="theme-btn"
  onClick={() => document.body.classList.toggle("dark-mode")}
>
  ☾
</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <p className="subtitle">
            TULAS INTERNATIONAL SCHOOL
          </p>

          <h1>
            Where curiosity
            <br />
            meets possibility.
          </h1>

          <p className="hero-text">
            A learning environment where students discover,
            imagine, create and prepare for the future.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-btn">
              Explore TIS
            </a>

            <a href="#admissions" className="secondary-btn">
              Admissions
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section about reveal">
        <p className="section-label">ABOUT TIS</p>

        <h2>
          More than a school.
          <br />
          A place to grow.
        </h2>

        <p className="section-text">
          Tulas International School provides an environment
          where academic learning, creativity, sports and
          personal development come together.
        </p>
      </section>

      {/* Why Tulas */}
      <section className="section reveal">

        <p className="section-label">WHY TULAS</p>

        <h2>Learning beyond classrooms.</h2>

        <div className="cards">

          <div className="card">
            <span>01</span>
            <h3>Academics</h3>
            <p>
              Encouraging curiosity, critical thinking and
              independent learning.
            </p>
          </div>

          <div className="card">
            <span>02</span>
            <h3>Sports</h3>
            <p>
              Developing teamwork, discipline and confidence
              through sports.
            </p>
          </div>

          <div className="card">
            <span>03</span>
            <h3>Creativity</h3>
            <p>
              Opportunities to explore arts, ideas and
              creative expression.
            </p>
          </div>

          <div className="card">
            <span>04</span>
            <h3>Leadership</h3>
            <p>
              Building responsibility, confidence and
              leadership skills.
            </p>
          </div>

        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="section dark-section reveal">

        <p className="section-label">ACADEMICS</p>

        <h2>
          Discover.
          <br />
          Learn.
          <br />
          Grow.
        </h2>

        <p className="section-text">
          A learning experience designed to develop knowledge,
          skills and confidence for the future.
        </p>

      </section>

      {/* Campus */}
      <section id="campus" className="section campus reveal">

        <p className="section-label">CAMPUS LIFE</p>

        <h2>A place to explore.</h2>

        <p className="section-text">
          From classrooms to activities and sports,
          every experience contributes to student growth.
        </p>

      </section>

      {/* Admissions */}
<section id="admissions" className="admissions reveal">

  <p className="section-label">
    START YOUR JOURNEY
  </p>

  <h2>
    Ready to discover
    <br />
    Tulas?
  </h2>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com&su=Admission%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Enquire Now
</a>
  

</section>

      {/* Footer */}
      <footer className="footer">
        <h3>TULAS</h3>

        <p>
          Tulas International School
        </p>

        <p>
          Dehradun, Uttarakhand
        </p>

        <p>
          © 2026 Tulas International School
        </p>
      </footer>

    </div>
  );
}

export default App;