const Awards = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* 📷 Image Column */}
          <div className="col-md-6 p-4 text-center">
            <img
              src="/media/images/largestBroker.svg"
              alt="Award"
              className="img-fluid"
            />
          </div>

          {/* 📝 Text Column */}
          <div className="col-md-6 p-4">
            <h2 className="mb-3">Largest stock broker in India</h2>
            <p className="mb-4">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            {/* 📝 List Columns */}
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>

            {/* 📰 Press Logos */}
            <div className="mt-4">
              <img
                src="/media/images/pressLogos.png"
                alt="Press Logos"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
