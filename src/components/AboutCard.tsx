import { useEffect, useState } from "react";

type AboutCardProps = {
  header: string;
  body: string;
};

function AboutCard({ header, body }: AboutCardProps) {
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
      id="about-cards-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        width: isMobile ? "340px" : "100%",
        margin: isMobile ? "0 auto" : "0",
      }}
    >
      <div
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          maxWidth: "760px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, #35236f, #57458f)",
            border: "1px solid #242424",
            borderRadius: "2rem",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <p
            style={{
              margin: "0",
              marginTop: ".4rem",
              marginBottom: ".4rem",
              marginLeft: "2rem",
              fontSize: "1.5rem",
            }}
          >
            {header}...
          </p>
          <div
            style={{
              padding: "2rem",
              paddingTop: "0",
              backgroundColor: "#343434",
              border: "1px solid #343434",
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            <p style={{ padding: 0, marginBottom: "0" }}>{body}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default AboutCard;
