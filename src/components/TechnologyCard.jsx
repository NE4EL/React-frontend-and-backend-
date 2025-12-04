import React from "react";
import "./TechnologyCard.css";

function TechnologyCard({ title, description, status }) {
  const getStatusClass = () => {
    if (status === "completed") return "card completed";
    if (status === "in-progress") return "card in-progress";
    return "card not-started";
  };

  return (
    <div className={getStatusClass()}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="status">{status}</span>
    </div>
  );
}

export default TechnologyCard;