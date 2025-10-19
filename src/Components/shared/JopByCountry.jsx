function JopByCountry({ country, number, image }) {
  return (
    <a
      href="#"
      style={{
        display: "block",
        textDecoration: "none",
      }}
      className="job-country-card"
    >
      <div
        className="card text-center position-relative"
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "250px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          overflow: "hidden",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{country}</h3>
          <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
            {number} Jobs
          </p>
        </div>
      </div>
    </a>
  );
}

export default JopByCountry;
