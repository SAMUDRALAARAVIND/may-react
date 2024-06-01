import { Carousel, Spin } from "antd";
import { useSelector } from "react-redux";
import "../styles/posts-list.scss";

export const PostsList = () => {
  const { apiStatus, data } = useSelector((state) => state.post.posts);
  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }

  if (apiStatus === "error") return <p>Error occured</p>;

  return (
    <div className="posts-list">
      {data?.map?.((post) => {
        return (
          <div key={post._id} className="post">
            <b>{post.title}</b>
            <p>{post.content}</p>
            {post.imageUrls?.map((image, index) => {
              return (
                <img
                  style={{ maxWidth: 200 }}
                  src={image}
                  key={index}
                  alt={image}
                />
              );
            })}
            <div className="footer">
              <div>
                <span className="material-icons">favorite</span>
                <span>{post.likesCount}</span>
              </div>
              <div>
                <span className="material-icons">comment</span>
                <span>{post.commentsCount}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// {
//     "_id": "6659ffcf2bb69df1de810af1",
//     "title": " Understanding Closures in JavaScript: A Key Concept for Developers",
//     "content": "In essence, a closure is a function that retains access to variables from its lexical scope even after the scope has closed. This enables powerful programming techniques like data encapsulation, partial application, and maintaining state in functional programming.",
//     "imageUrls": [
//         "https://picsum.photos/200/300"
//     ],
//     "likesCount": 0,
//     "commentsCount": 0
// },
