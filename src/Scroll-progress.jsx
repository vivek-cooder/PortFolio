import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Scroll-progress.css'

function Scrollprogress() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".timeline-progress", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top center",
        end: "center center",
        scrub: true
      }
    });

  }, []);

  return (
    <section className="timeline-section">

      <div className="timeline-line">
        <div className="timeline-progress">
          <div className="timeline-dot"></div>
        </div>
      </div>

      <div className="timeline-item">
        <h2 className="job-title">Exide Industries Limited</h2>
        <p className="designation">Software Support Engineer</p>
        <p className="period">May 2023 - Present</p>
      </div>
      <div className="card2">
        <h2 className="job-title">Compunet</h2>
        <p className="designation">Field Work Engineer</p>
        <p className="period">Aug 2022- May 2023</p>
      </div>

    </section>
  );
}

export default Scrollprogress;