// Footer.jsx

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#fafafa" }} className="mt-5 pt-5 border-top">
      <div className="container">
        <div className="row text-start">
          {/* Logo & Copy */}
          <div className="col-md-3 mb-4">
            <img src="media/images/logo.svg" alt="Zerodha Logo" style={{ width: "60%" }} />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">Z-Connect blog</a></li>
              <li><a href="#">List of charges</a></li>
              <li><a href="#">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#">Open an account</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 text-muted small" style={{ fontSize: "13px", lineHeight: "1.7" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633.
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015.
            Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238.
          </p>
          <p>
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
