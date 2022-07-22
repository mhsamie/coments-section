import "./comment.css";
const Comment = ({ name, email }) => {
  return (
    <div className="comment-part">
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Comment;
