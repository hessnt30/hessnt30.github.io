function MundetProject() {
  return (
    <>
      <div
        style={{
          marginLeft: "11rem",
          marginTop: "2rem",
          width: "50%",
          marginBottom: "2rem",
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
            Attendance System
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
          <p>Built for delfort during Summer Internship</p>
        </div>
      </div>
    </>
  );
}

export default MundetProject;
