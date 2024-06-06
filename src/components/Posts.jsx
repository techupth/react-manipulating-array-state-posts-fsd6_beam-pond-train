import { useState } from "react";
import data from "./data/Data";

function Posts() {
  const [likes, setLikes] = useState(data.map((item) => item.likes));

  // const handleLike = (index) => {
  //   const newLikes = [...likes];
  //   newLikes[index] += 1;
  //   setLikes(newLikes);
  // };

  // const handleDislike = (index) => {
  //   if (likes[index] > 0) {
  //     const newLikes = [...likes];
  //     newLikes[index] -= 1;
  //     setLikes(newLikes);
  //   }
  // };

  return (
    <div class="app-wrapper">
      {data.map((item, index) => (
        <div key={index} class="post-item">
          <div class="post-header">
            <h2>{item.title}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{likes[index]}</span>
            </div>
          </div>
          <p class="post-content">{item.content}</p>
          <div class="post-actions">
            <button
              class="like-button"
              onClick={() =>
                setLikes(likes.toSpliced(index, 1, likes[index] + 1))
              }
            >
              {/* อ่านและทำสำเนาใหม่ คิดว่าเป็นvalue */}
              Like
            </button>
            <button
              class="dislike-button"
              onClick={() =>
                likes[index] > 0
                  ? setLikes(likes.toSpliced(index, 1, likes[index] - 1))
                  : null
              }
            >
              Dislike
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;

{
  /* <div class="post-item">
  <div class="post-header" style={{ display: "flex", flexDirection: "column" }}>
    <h2>Post Title {item.id}</h2>
    <h1 class="app-title">{item.title}</h1>

    <div> 
      <h2></h2>
      <p>{item.content}</p>
      <p>Likes: {item.likes}</p>
    </div>
  </div>
</div>; */
}
