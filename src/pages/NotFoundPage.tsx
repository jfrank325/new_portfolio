import { Link } from 'react-router-dom';
import BasicButton from '../components/Basics/BasicButton';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <BasicButton primary>
          <Link to="/" aria-label="Return to home page">Return to Home</Link>
        </BasicButton>
      </div>
    </div>
  );
};

export default NotFoundPage;

