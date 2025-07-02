import * as React from "react";
import { Link } from "react-router-dom";

// Styles
import "../styles/notfound.scss";

// Components
import Loader from "../components/Loader";

const NotFound = () => {
  return (
    <div className="not-found">
      <Loader isOpened={true} linkBack={true} limit={404} numberSize="!text-[100px]" />
      <Link to="/">go back to https://nitishgupta10.netlify.app/</Link>
    </div>
  );
};

export default NotFound;
