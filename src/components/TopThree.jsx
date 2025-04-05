import React from "react";
import "./TopThree.css";

const TopThree = ({ users }) => {
  const [second, first, third] = users;

  return (
    <div className="top-three">
      <div className="card second">
        <img src={second.avatar} alt="2nd" />
        <div className="name">{second.name}</div>
        <div className="points">{second.points.toLocaleString()}</div>
        <div className="badge silver">2</div>
      </div>
      <div className="card first">
        <img src={first.avatar} alt="1st" />
        <div className="name">{first.name}</div>
        <div className="points">{first.points.toLocaleString()}</div>
        <div className="badge gold">1</div>
      </div>
      <div className="card third">
        <img src={third.avatar} alt="3rd" />
        <div className="name">{third.name}</div>
        <div className="points">{third.points.toLocaleString()}</div>
        <div className="badge bronze">3</div>
      </div>
    </div>
  );
};

export default TopThree;
