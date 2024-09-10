import { useEffect, useState } from "react";
import apptrackImage1 from "../assets/AppTrackImage1.png";
import apptrackImage2 from "../assets/AppTrackImage2.png";
import apptrackImage3 from "../assets/AppTrackImage3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function AppTrackProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200); // Adjust the width threshold as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [apptrackImage1, apptrackImage2, apptrackImage3];

  function showSlide(index: number) {
    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }
  }

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  return (
    <div
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center", // Centering horizontally
        alignItems: "center",
        width: isMobile ? "340px" : "100%",
        maxWidth: "1200px",
        margin: "0 auto", // Centering the whole section
      }}
    >
      <div
        id="project-left"
        style={{
          width: "100%",
          maxWidth: "600px", // Adjust width for mobile
          overflow: "hidden",
        }}
      >
        <div className="carousel">
          <div className="carousel-images">
            <img
              src={slides[currentSlide]}
              alt=""
              style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ paddingRight: "5%" }}>
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  padding: ".25rem",
                  color: currentSlide === 0 ? "#57458f" : "white",
                }}
              />
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  padding: ".25rem",
                  color: currentSlide === 1 ? "#57458f" : "white",
                }}
              />
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  padding: ".25rem",
                  color: currentSlide === 2 ? "#57458f" : "white",
                }}
              />
            </div>
            <div>
              <button
                className="prev"
                style={{ marginRight: ".2rem" }}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button className="prev" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="project-right"
        style={{
          marginLeft: isMobile ? 0 : "2rem",
          width: isMobile ? "340px" : "100%",
          maxWidth: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "1.5rem", lineHeight: "1.1", margin: 0 }}>
            AppTrack
          </p>
          <p style={{ margin: 0 }}>Aug 2024 - Present</p>
        </div>
        <div>
          <p style={{ fontStyle: "italic" }}>Next.js • Supabase • Tailwind</p>
        </div>
        <div>
          <p>
            Developing a job application tracker with Next.js and Supabase,
            featuring a kanban-style drag-and-drop interface. Implemented secure
            data management using row-level security policies and enhanced user
            experience with a centralized state management system in React
            context for a more responsive UI.
          </p>
          <p style={{ fontStyle: "italic" }}>Solo personal project</p>
        </div>
        <a href="https://github.com/hessnt30/apptrack" title="Link to repo">
          <FontAwesomeIcon
            className="social-icon"
            style={{ padding: 0, marginTop: "2%" }}
            icon={faGithub}
          />
        </a>
      </div>
    </div>
  );
}

export default AppTrackProject;
