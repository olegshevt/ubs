import React from "react";
import s from "./404.module.css";
import { Link } from "react-router-dom";

const Error404: React.FC = () => {
  return (
    <div>
      <div className={s.errorContainer}>
        <h1 className={s.errorItem}>Page not found</h1>
        <h2>Not found</h2>
        <h4>I updated this page</h4>
        <p className={s.errorItem}>
          You can check <Link to="/">our main page</Link>!
        </p>
        <h3>We could not find</h3>
      </div>
    </div>
  );
};

export default Error404;
