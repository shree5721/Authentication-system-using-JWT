import React from "react";
import "./welcome.css";
import illu from "../images/illu.jpg";
const Welcome = () => {
  let username = localStorage.getItem("user");
  return (
    <>
      <div className="container">
        <div className="left_box">
          <h1>Welcome</h1>
          <h3>{username}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Odio quibusdam, atque <br />
            nihil molestias ipsam eos voluptas beatae aut facilis quod!
          </p>
          <button>Get Started</button>
        </div>
        <div className="right_box">
          <img src={illu} alt="hi" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
