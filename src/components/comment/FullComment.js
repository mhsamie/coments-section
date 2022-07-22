import axios from "axios";
import { useState, useEffect } from "react";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((response) => setComment(response.data));
  }, [commentId]);
  if (!commentId) return <p>You didn't choose any comment to see</p>;
  return (
    <div>
      {" "}
      {comment ? (
        <>
          <p>name: {comment.name}</p>
          <p>email: {comment.email}</p>
          <p>body:{comment.body}</p>
        </>
      ) : (
        <p>no cm</p>
      )}
    </div>
  );
};

export default FullComment;
