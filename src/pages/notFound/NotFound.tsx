import "./notfound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>This page does not exist!</h1>
      <p>If you want to back home please push to button...</p>
      <Link className="link" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
