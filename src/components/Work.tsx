import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Phishing Detection System",
    category: "Final Year Project — Cybersecurity ML Tool",
    tools: "FastAPI, XGBoost, Streamlit, VirusTotal API, WHOIS, SSL Checker",
    color: "#0f3460",
    accent: "#e94560",
    emoji: "🛡️",
    link: "https://alza4872-crypto.github.io",
  },
  {
    title: "YouTube Transcript Agent",
    category: "Automation Pipeline",
    tools: "n8n, Python, YouTube API, Excel Output",
    color: "#1a1a2e",
    accent: "#16213e",
    emoji: "⚡",
    link: "https://alza4872-crypto.github.io",
  },
  {
    title: "Vulnerability Assessment",
    category: "Cybersecurity — Nessus Report",
    tools: "Nessus, Windows, CVE Analysis, Remediation Report",
    color: "#1b262c",
    accent: "#0f4c75",
    emoji: "🔍",
    link: "https://alza4872-crypto.github.io",
  },
  {
    title: "Crowd Violence Detection",
    category: "AI / Computer Vision",
    tools: "ConvLSTM, Python, OpenCV, Real-time Alerts",
    color: "#2d132c",
    accent: "#ee4540",
    emoji: "🤖",
    link: "https://alza4872-crypto.github.io",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <div style={{
                          width: "100%",
                          height: "100%",
                          minHeight: "320px",
                          background: `linear-gradient(135deg, ${project.color}, ${project.accent})`,
                          borderRadius: "12px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "1rem",
                          cursor: "pointer",
                        }}>
                          <div style={{ fontSize: "5rem" }}>{project.emoji}</div>
                          <div style={{
                            color: "white",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            textAlign: "center",
                            padding: "0 2rem",
                          }}>{project.title}</div>
                          <div style={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "0.85rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}>
                            View Project <MdArrowOutward />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
