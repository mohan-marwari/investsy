const RightSection = ({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-4">
          <h1 className="mb-4">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a
              href={learnMore}
              className="text-decoration-none fw-medium text-primary"
            >
              Learn More <i className="fa fa-long-arrow-right ms-1" />
            </a>
          </div>
        </div>
        <div className="col-md-7 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={`${productName} screenshot`}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
