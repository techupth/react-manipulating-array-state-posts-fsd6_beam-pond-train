import { useState } from "react";
import postData from "./PoatData";

function Posts() {
  const [posts, setPosts] = useState(postData);

  const handleLike = (like) => {
    const updateLike = posts.map((post) => {
      if (post.id === like) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updateLike);
  };

  const handleUnLike = (unLike) => {
    const updateLike = posts.map((post) => {
      if (post.id === unLike && post.likes > 0) {
        return { ...post, likes: post.likes - 1 } 
      } 
      return post;
    });
    setPosts(updateLike);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((post) => (
          <div key={post.id} class="post-item">
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">{post.content}</p>
            <div class="post-actions">
              <button class="like-button" onClick={() => handleLike(post.id)}>
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => handleUnLike(post.id)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
