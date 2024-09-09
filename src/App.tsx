import "./App.css";
import AboutCard from "./components/AboutCard";
import Header from "./components/Header";
import {
  faDiagramProject,
  faFileLines,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./components/SectionTitle";
import AppTrackProject from "./components/AppTrackProject";
import MundetProject from "./components/MundetProject";
import resume from "./assets/resume.png";

function App() {
  const aboutCardOneBody =
    "... at Virginia Tech currently focused on full-stack web development, with hands-on experience in React, Node.js, Express.js and SQL Server. ";

  const aboutCardTwoBody =
    "... designing and developing web applications through my previous internship and personal projects.";

  const aboutCardThreeBody =
    "... I'm excited to find a full-time role where I can continue learning, contribute to impactful projects, and work alongside a team that values creativity and collaboration.";

  return (
    <>
      <Header />

      <SectionTitle title="About me" icon={faInfoCircle} />
      <AboutCard
        header={"Senior Computer Science Student"}
        body={aboutCardOneBody}
      />
      <AboutCard header={"Strong foundation in"} body={aboutCardTwoBody} />
      <AboutCard
        header={"As I approach graduation"}
        body={aboutCardThreeBody}
      />

      <SectionTitle title="Projects" icon={faDiagramProject} />

      <MundetProject />
      <AppTrackProject />

      <SectionTitle title="Resume" icon={faFileLines} />

      <div
        style={{
          width: "100vw",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "4rem",
        }}
      >
        <img
          style={{ maxWidth: "100%", borderRadius: "2rem" }}
          src={resume}
        ></img>
      </div>

      <p>*Styles not done</p>
    </>
  );
}

export default App;
