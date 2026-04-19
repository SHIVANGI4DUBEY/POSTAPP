import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 🔐 Auth protection
  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth !== "true") {
      navigate("/");
    }
  }, [navigate]);

  // 📥 Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
  "https://postapp-backend-uuks.onrender.com/get-post"
);
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
        setMessage("Failed to load posts");
      }
    };

    fetchPosts();
  }, []);

  // 🗑 Delete post
  const handleDelete = async (id) => {
    try {
await axios.delete(`https://postapp-backend-uuks.onrender.com/delete/${id}`);

      setPosts((prev) => prev.filter((post) => post._id !== id));

      setMessage("Post deleted successfully!");
      setTimeout(() => setMessage(""), 2000);
    } catch (error) {
      console.log(error);
      setMessage("Error deleting post");
    }
  };

  // ✏️ Update post
  const handleUpdate = async (id, oldCaption) => {
    const newCaption = prompt("Edit caption:", oldCaption);

    if (!newCaption) return;

    try {
     await axios.patch(
  `https://postapp-backend-uuks.onrender.com/updatePost/${id}`,
  {
    caption: newCaption,
  }
);

      setPosts((prev) =>
        prev.map((post) =>
          post._id === id ? { ...post, caption: newCaption } : post
        )
      );

      setMessage("Post updated successfully!");
      setTimeout(() => setMessage(""), 2000);
    } catch (error) {
      console.log(error);
      setMessage("Error updating post");
    }
  };

  return (
    <section className="feed-section">
      <h1>Feed</h1>

      {message && <p style={{ color: "green" }}>{message}</p>}

      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>

            <div className="post-actions">
              <button onClick={() => handleDelete(post._id)}>
                Delete
              </button>

              <button
                onClick={() =>
                  handleUpdate(post._id, post.caption)
                }
              >
                Update
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>No Posts Available</h2>
      )}
    </section>
  );
};

export default Feed;