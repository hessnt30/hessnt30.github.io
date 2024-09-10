import { useEffect, useState } from "react";
import delfortImage from "../assets/DelfortImage.png";

function MundetProject() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200); // Adjust the width threshold as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    //   <>
    //     <div
    //       style={{
    //         marginTop: "2rem",
    //         width: "100%",
    //         maxWidth: "600px",
    //         marginBottom: "2rem",
    //         paddingTop: "2rem",
    //         paddingBottom: "2rem",
    //         margin: "0 auto", // Centering the whole section
    //       }}
    //     >
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           width: "100%",
    //         }}
    //       >
    //         <p style={{ fontSize: "1.5rem", lineHeight: "1.1", margin: 0 }}>
    //           Attendance System
    //         </p>
    //         <p style={{ margin: 0 }}>May 2024 - Aug 2024</p>
    //       </div>
    //       <div>
    //         <p style={{ fontStyle: "italic" }}>
    //           React • Node.js • Express.js • Prisma ORM • SQLServer • Docker
    //         </p>
    //       </div>
    //       <div>
    //         <p>
    //           Built and deployed a full stack attendance tracking app for hourly
    //           employees, implementing role-based access with Microsoft Azure AD.
    //           Deployed with Docker and secured with Traefik, while enabling
    //           efficient absence reporting for 60+ employees using server-side
    //           Excel generation. Managed 6,000+ occurrences and improved
    //           reliability with Winston logging.
    //         </p>
    //         <p>Built for delfort during Summer Internship</p>
    //       </div>
    //     </div>
    //   </>
    <div
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center", // Centering horizontally
        alignItems: "center",
        width: isMobile ? "340px" : "100%",
        maxWidth: "1200px", // Constraining the content width
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
              src={delfortImage}
              alt=""
              style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
            />
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
            Mundet Attendance System
          </p>
          <p style={{ margin: 0 }}>May 2024 - Aug 2024</p>
        </div>
        <div>
          <p style={{ fontStyle: "italic" }}>
            React • Node.js • Express.js • Prisma ORM • SQLServer • Docker
          </p>
        </div>
        <div>
          <p>
            Built and deployed a full stack attendance tracking app for hourly
            employees, implementing role-based access with Microsoft Azure AD.
            Deployed with Docker and secured with Traefik, while enabling
            efficient absence reporting for 60+ employees using server-side
            Excel generation. Managed 6,000+ occurrences and improved
            reliability with Winston logging.
          </p>
          <p style={{ fontStyle: "italic" }}>
            Built for delfort during Summer Internship
          </p>
        </div>
      </div>
    </div>
  );
}

export default MundetProject;
