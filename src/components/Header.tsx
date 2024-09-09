import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilepic from "../assets/profilepic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div
      id="header-wrapper"
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          height: "12.5%",
          backgroundColor: "#35236f",
          display: "flex",
          paddingTop: "4rem",
          background: "linear-gradient(to bottom, #35236f, #242424)",
        }}
      >
        <div
          id="header"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "2rem",
            paddingLeft: "8rem",
            paddingRight: "8rem",
          }}
        >
          <div id="left-left-header">
            <div id="left-header" style={{ display: "flex" }}>
              <img
                src={profilepic}
                style={{
                  border: ".3rem solid #242424",
                  borderRadius: "100%",
                  maxWidth: "100%",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              />
              <div
                id="header-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "2rem",
                }}
              >
                <h1>Nick Hess</h1>
                <p>Computer Science Student at Virginia Tech</p>
              </div>
            </div>

            <div id="right-header"></div>
          </div>
          <div
            id="right-right-header"
            style={{
              display: "flex",
              alignItems: "center",
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
