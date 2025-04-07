import Navbar from "@/components/navigation/navbar";
import React from "react";
import Squares from "@/components/Squares";
const Home = () => {
  return (
    <>
      <div>
        {" "}
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
