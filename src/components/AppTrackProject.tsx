import { useEffect, useState } from "react";
import apptrackImage1 from "../assets/AppTrackImage1.png";
import apptrackImage2 from "../assets/AppTrackImage2.png";
import apptrackImage3 from "../assets/AppTrackImage3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AppTrackProject() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    console.log(`../assets/${slides[currentSlide]}`);
  });

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
    <div style={{ width: "100vh" }}>
      <div
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingLeft: "11rem",
          display: "flex",
        }}
      >
        <div id="project-left">
          <div className="carousel">
            <div className="carousel-images">
              <img src={slides[currentSlide]} alt="" />
            </div>
            <div style={{ float: "right" }}>
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
        <div
          id="project-right"
          style={{
            marginLeft: "2rem",
            width: "38%",
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
              featuring a kanban-style drag-and-drop interface. Implemented
              secure data management using row-level security policies and
              enhanced user experience with a centralized state management
              system in React context for a more responsive UI.
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
    </div>
  );
}

export default AppTrackProject;
