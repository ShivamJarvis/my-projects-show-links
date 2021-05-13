import React from "react";
// import image1 from "./../Assets/proj1.png";
const Card = ({ name, photo, link, category }) => {
  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
        <a href={link} target='#'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={photo} className="card-img-top" alt={name} style={{height:'200px'}}/>
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            {link==='#' && <p className="on-process text-center">On Progress 👩‍🚒</p>}
          </div>
        </div>
        </a>
      </div>
    </React.Fragment>
  );
};
export default Card;
