const Team = () => {
  return (
    // About People 
    <section className="about-people">
      <div className="container my-5">
        <h2 className="text-center mb-5">People</h2>
        <div className="row between">
          <div className="col-md-5 text-center">
            <img
              src="media/images/nithinKamath.jpg"
              alt="Team Member 1"
              className="img-fluid rounded-circle mb-3"
              style={{ borderRadius: "100%", width: "50%" }}
            />
            <h5>Nithin Kamath</h5>
            <p className="text-muted mb-5">Founder, CEO</p>
          </div>
          <div className="col-md-7">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Team;
