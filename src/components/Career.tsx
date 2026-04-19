import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Python automation tools, web scrapers, and data pipelines
              for clients. Specializing in AI text humanization and cybersecurity
              tools. Active on Fiverr and Upwork.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IEEE Vice Chair</h4>
                <h5>Hamdard University</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Serving as Vice Chair at Hamdard University IEEE Student Branch.
              Contributing to tech events, workshops, and student leadership
              in the field of cybersecurity and engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Student</h4>
                <h5>Hamdard University</h5>
              </div>
              <h3>2023–2026</h3>
            </div>
            <p>
              Studying Digital Forensics and Cybersecurity. Built a phishing
              detection system (FYP) using FastAPI and XGBoost achieving 93%
              accuracy. Completed hands-on projects in penetration testing,
              malware analysis, and machine learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ICS</h4>
                <h5>Rawalpindi College of Commerce</h5>
              </div>
              <h3>2021–2022</h3>
            </div>
            <p>
              Completed Intermediate in Computer Science with a focus on
              programming fundamentals, mathematics, and computer applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
