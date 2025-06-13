const Education = () => {
  return (
    <section>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          {/* 🎓 Image Column */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/media/images/education.svg"
              alt="Education"
              className="img-fluid"
              style={{ maxWidth: "70%" }}
            />
          </div>

          {/* 📘 Text Column */}
          <div className="col-md-6">
            <h2 className="mb-3 fs-2">Free and open market education</h2>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-decoration-none fw-medium text-primary">
              Varsity <i className="fa fa-long-arrow-right ms-1" />
            </a>

            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="text-decoration-none fw-medium text-primary">
              TradingQ&A <i className="fa fa-long-arrow-right ms-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
