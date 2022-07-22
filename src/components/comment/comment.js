import "./comment.css";
const Comment = ({ name, email, clickHandler }) => {
  return (
    <div className="comment-part" onClick={clickHandler}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Comment;
