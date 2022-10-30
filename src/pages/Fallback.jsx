import { Link } from "react-router-dom";

export const Fallback = () => {
  return (
    <div className="Fallback">
      <h1>404 Error</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
