// LikeButton.js
import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        background: "none",
        border: "none",
        color: liked ? "red" : "gray",
        cursor: "pointer",
        fontSize: "18px",
      }}
    >
      {liked ? "❤" : "♡"}
    </button>
  );
};

export default LikeButton;