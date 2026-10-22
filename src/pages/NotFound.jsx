import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </section>
  );
}
