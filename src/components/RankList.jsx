import React from "react";
import "./RankList.css";

const RankList = ({
  users,
  startIndex,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <>
      <ul className="rank-list">
        {users.map((user, i) => (
          <li key={user.id} className="rank-item">
            <span className="rank-num">{startIndex + i}</span>
            <img src={user.avatar} alt="avatar" className="avatar" />
            <span className="name">{user.name}</span>
            <span className="points">{user.points.toLocaleString()}</span>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          ⬅️ Prev
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next ➡️
        </button>
      </div>
    </>
  );
};

export default RankList;
