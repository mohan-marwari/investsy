import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light text-center">
      <div className="p-4">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="fw-semibold text-dark mb-3">Kiaan couldn’t find that page</h2>
        <p className="text-secondary mb-4">
          We couldn’t find the page you were looking for. Visit Zerodha’s home page.
        </p>
        <Link to="/" className="btn btn-primary px-4 py-2">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
