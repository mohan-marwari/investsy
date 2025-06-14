const Hero = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row text-center">
          <img
            src="/media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5 img-fluid"
            style={{ maxHeight: "50vh", objectFit: "contain" }}
          />
          <h1 >Invest in everything</h1>
          <p className="text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary mx-auto my-5 d-block w-auto fw-bold" style={{ padding: "10px 30px" }}> 
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
