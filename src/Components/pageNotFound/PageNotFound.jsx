import Header from "../shared/Header";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="home container pb-3 pt-4 pb-5 text-center">
        <Header h1="PAGE IS NOT" inSpan="FOUND 😢" p="Sorry!" />
        <Link className="btn btn-outline-dark" to="/">
          Return to homepage
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
