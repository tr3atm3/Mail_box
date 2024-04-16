import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const tokenId = useSelector((store) => store.auth.tokenId);
  const navigate = useNavigate();
  useEffect(() => {
    if (!tokenId) {
      navigate("/auth");
    }
  }, [tokenId]);
  return (
    <div className="mt-2 px-4">
      <h1 className="text-xl">Welcome to your mail box</h1>
    </div>
  );
};

export default Home;
