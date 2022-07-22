import axios from "axios";
import { useState, useEffect } from "react";
import "./fullcomment.css";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((response) => setComment(response.data));
    }
  }, [commentId]);
  let commentDetail = <p> You didn't choose a comment to see!</p>;
  if (commentId) commentDetail = <p>loading...</p>;
  if (comment) {
    commentDetail = (
      <div className="full-comment">
        <p>
          name: <span>{comment.name}</span>
        </p>
        <p>
          email:<span> {comment.email}</span>
        </p>
        <p>
          body:<span>{comment.body}</span>
        </p>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
