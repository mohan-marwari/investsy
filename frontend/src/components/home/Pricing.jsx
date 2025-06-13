const Pricing = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* 💰 Left Column - Text */}
          <div className="col-md-6 mb-4 mb-md-0 px-4">
            <h2 className="fs-2 mb-3">Unbeatable pricing</h2>
            <p className="text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" className="text-decoration-none fw-medium text-primary">
              See Pricing{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>

          {/* 📦 Right Column - Pricing Boxes */}
          <div className="col-md-6 px-4">
            <div className="row text-center g-3">
              <div className="col-12 col-sm-6">
                <div className="border rounded p-4 h-100">
                  <h3 className="mb-2">₹0</h3>
                  <p className="text-muted mb-0">
                    Free equity delivery <br /> & direct mutual funds
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border rounded p-4 h-100">
                  <h3 className="mb-2">₹20</h3>
                  <p className="text-muted mb-0">Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
