function RealStories() {
  const stories = [
    {
      name: "Mohamed Nofal",
      company: "National Bakeries Co.",
      field: "Manufacturing",
      quote:
        "CareerHub made job searching so simple! I found my dream job in just two weeks.",
    },
    {
      name: "Abid Ali",
      company: "Abr Contracting Company",
      field: "Administration",
      quote:
        "Amazing experience! I received multiple offers thanks to CareerHub’s easy application process.",
    },
    {
      name: "Mohammad Saleem",
      company: "Aibak Al Ilm International School",
      field: "Teaching and Academics",
      quote:
        "I got my dream job using CareerHub. The platform is very professional and trustworthy.",
    },
    {
      name: "Archana Arunraj",
      company: "Next Generation School",
      field: "Accounting and Auditing",
      quote:
        "I was hired as an accountant within a week of applying. Thank you CareerHub for this opportunity!",
    },
  ];

  return (
    <section className="my-5 py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3" style={{ color: "#ff5722" }}>
          Real Stories
        </h2>
        <p className="text-muted mb-4">
          How CareerHub helped professionals like you achieve their career goals
        </p>

        <div
          id="storiesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="p-4 shadow-sm bg-white rounded-4 mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <i className="bi bi-quote text-warning fs-2"></i>
                  <p className="fst-italic fs-5">“{story.quote}”</p>
                  <hr className="w-25 mx-auto text-warning" />
                  <h5 className="mb-0 fw-semibold">{story.name}</h5>
                  <p className="text-muted mb-0">
                    {story.company} · {story.field}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#storiesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#storiesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default RealStories;
