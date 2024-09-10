import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilepic from "../assets/profilepic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="header-wrapper"
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          height: isMobile ? "auto" : "12.5%",
          backgroundColor: "#35236f",
          display: "flex",
          paddingTop: isMobile ? "2rem" : "4rem",
          background: "linear-gradient(to bottom, #35236f, #242424)",
          flexDirection: isMobile ? "column" : "row", // Stack items vertically on mobile
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <div
          id="header"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "center" : "space-between",
            padding: isMobile ? "0" : "2rem", // Adjust padding for mobile
            paddingLeft: isMobile ? "0rem" : "8rem",
            paddingRight: isMobile ? "0rem" : "8rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div id="left-left-header">
            <div
              id="left-header"
              style={{ display: "flex", padding: isMobile ? ".5rem" : 0 }}
            >
              <img
                src={profilepic}
                style={{
                  border: ".3rem solid #242424",
                  borderRadius: "100%",
                  maxWidth: isMobile ? "150px" : "100%",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                  marginBottom: isMobile ? "1rem" : "0",
                  width: "100%",
                }}
              />
              <div
                id="header-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: isMobile ? "0" : "2rem",
                }}
              >
                <h1 style={{ fontSize: isMobile ? "1.5rem" : "2rem" }}>
                  Nick Hess
                </h1>
                <p style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  Computer Science Student at Virginia Tech
                </p>
              </div>
            </div>

            <div id="right-header"></div>
          </div>
          <div
            id="right-right-header"
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start", // Center icons on mobile
              alignItems: "center",
              marginTop: isMobile ? "1rem" : "0",
            }}
          >
            <div id="socials-wrapper">
              <a
                href="https://www.instagram.com/nicholas__hess/"
                title="My LinkedIn"
              >
                <FontAwesomeIcon className="social-icon" icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/hessnt" title="My LinkedIn">
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
