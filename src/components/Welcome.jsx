import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-2">Dashboard</h1>
        {user && (
          <div className="box">
            <h2 className="subtitle">
              Welcome Back{" "}
              <strong className="has-text-primary">{user.name}</strong>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
