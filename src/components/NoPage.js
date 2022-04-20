import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div style={{ paddingBottom: "6px", backgroundColor: "white" }}>
      <h1 style={{ color: "red", fontSize: "64px" }}>404</h1>
      <h3 style={{ fontSize: "22px" }}>Page Not Found</h3>
      <p>
        <Link to="/" style={{ color: "initial", fontSize: "22px" }}>
          Go Home
        </Link>
      </p>
    </div>
  );
};

export default NoPage;
