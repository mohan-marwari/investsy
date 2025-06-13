const Stats = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* 📈 Left Text Column */}
          <div className="col-md-6 mb-5 mb-md-0 px-4">
            <h2 className="fs-2 mb-4">Trust with confidence</h2>

            <div className="mb-4">
              <h4 className="fs-5">Customer-first always</h4>
              <p className="text-muted">
                That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
                crores worth of equity investments.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fs-5">No spam or gimmicks</h4>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fs-5">The Zerodha universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div>
              <h4 className="fs-5">Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>

          {/* 🖼️ Right Image Column */}
          <div className="col-md-6 text-center px-4">
            <img
              src="/media/images/ecosystem.png"
              alt="Zerodha Ecosystem"
              className="img-fluid mb-4"
              style={{ maxWidth: "90%" }}
            />
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a
                href="#"
                className="text-decoration-none fw-medium text-primary"
              >
                Explore our products{" "}
                <i className="fa fa-long-arrow-right ms-1" />
              </a>
              <a
                href="#"
                className="text-decoration-none fw-medium text-primary"
              >
                Try Kite demo <i className="fa fa-long-arrow-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
