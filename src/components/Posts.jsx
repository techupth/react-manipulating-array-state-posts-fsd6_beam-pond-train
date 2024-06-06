import { allPost } from "../Data/AllPost";
import { useState } from "react";

function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {allPost.map((social) => {
          const [count, setCount] = useState(0);
          const handleClickPlus = () => {
            setCount(count + 1);
          };
          const handleClickMinus = () => {
            if (social.likes + count !== 0) {
              setCount(count - 1);
            } else {
              setCount(count - 0);
            }
          };
          return (
            <div class="post-item">
              <div class="post-header">
                <h2>
                  {social.title} #{social.id}
                </h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{social.likes + count}</span>
                </div>
              </div>
              <p class="post-content">{social.content}</p>
              <div class="post-actions">
                <button class="like-button" onClick={handleClickPlus}>
                  Like
                </button>
                <button class="dislike-button" onClick={handleClickMinus}>
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
