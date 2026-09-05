import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [linkPosting, setlinkPosting] = useState([
    {
      _id: 1,
      url: "http",
      title: "youtube",
      profile_pic: "https://ik.imagekit.io/Hammad30/image_KrkDGBMJ3.jpg",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/get_lynk").then((res) => {
      console.log(res.data.user_info);
      setlinkPosting(res.data.user_info);
    });
  }, []);

  return (
    <div className="feed">
      <h1 className="feed-title">Post_Feed</h1>

      <div className="posts-container">
        {linkPosting.map((post) => (
          <div className="post-card" key={post._id}>
            <img
              className="post-image"
              src={post.profile_pic}
              alt={`Post ${post._id}`}
            />

            <div className="post-content">
              {/* <p className="post-url">{post.url}</p> */}
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                Visit Link : {post.url}
              </a>
              <p className="post-title">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;