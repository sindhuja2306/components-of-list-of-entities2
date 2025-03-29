import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src={post.profilePic}
        alt="Profile"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
      <div style={{ flex: 1 }}>
        <strong>{post.username}</strong>
        <p>{post.content}</p>
      </div>
      <LikeButton />
    </div>
  );
};

export default PostCard;