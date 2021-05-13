import React from "react";
import Card from "./Card";

const CardContainer = ({ title, projects }) => {
  return (
    <React.Fragment>
      <div className="container my-5 text-center">
        <h1 className="topic-heading">{title}</h1>
        <div className="underline"></div>
      </div>
      <div className="row">
        {projects.map((item) => {
          return <Card {...item} key={item.id}/>;
        })}
      </div>
    </React.Fragment>
  );
};

export default CardContainer;
