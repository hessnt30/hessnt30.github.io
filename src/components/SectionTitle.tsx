import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type SectionTitleProps = {
  title: string;
  icon: IconProp;
};

function SectionTitle({ title, icon }: SectionTitleProps) {
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
      style={{
        display: "flex",
        paddingLeft: isMobile ? "0" : "8rem",
        marginTop: "1rem",
        width: "100%",
        paddingBottom: ".8rem",
        borderBottom: "1px solid #343434",
      }}
    >
      <FontAwesomeIcon
        style={{ fontSize: "2rem", marginTop: ".5rem", marginRight: "1rem" }}
        icon={icon}
      />
      <p style={{ fontSize: "2.5rem", lineHeight: "1.1", margin: 0 }}>
        {title}
      </p>
    </div>
  );
}

export default SectionTitle;
