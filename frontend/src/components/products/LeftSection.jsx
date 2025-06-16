const LeftSection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-between">
        {/* Left images  */}
        <div className="col-md-7 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={`${productName} screenshot`}
            className="img-fluid"
          />
        </div>

        {/* Right text section */}
        <div className="col-md-4 ">
          <h1 className="mb-4">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a
              href={tryDemo}
              className="text-decoration-none fw-medium text-primary"
            >
              Try Demo <i className="fa fa-long-arrow-right ms-1" />
            </a>
            <a
              href={learnMore}
              className="text-decoration-none fw-medium text-primary"
              style={{ marginLeft: "50px" }}
            >
              Learn More <i className="fa fa-long-arrow-right ms-1" />
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
