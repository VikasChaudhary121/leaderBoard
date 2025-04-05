import React, { useEffect, useState } from "react";
import "./App.css";
import users from "./data/users";
import TopThree from "./components/TopThree";
import RankList from "./components/RankList";
import Skeleton from "./components/Skeleton";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  const topThree = users.slice(0, 3);
  const paginated = users.slice(3, 100);

  const pageSize = 17;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentUsers = paginated.slice(start, end);

  return (
    <div className="container">
      <h1 className="heading">🏆 Live Ranking</h1>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <TopThree users={topThree} />
          <RankList
            users={currentUsers}
            startIndex={start + 4}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(paginated.length / pageSize)}
          />
        </>
      )}
    </div>
  );
};

export default App;
