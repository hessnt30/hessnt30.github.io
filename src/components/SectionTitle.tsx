import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SectionTitleProps = {
  title: string;
  icon: IconProp;
};

function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "8rem",
        marginTop: "1rem",
        width: "100vw",
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
