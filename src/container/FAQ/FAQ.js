import axios from "axios";
import { useState, useEffect } from "react";
import Comment from "../../components/comment/comment";
import NewComments from "../../components/comment/NewComments";
import FullComment from "../../components/comment/FullComment";
import "./FAQ.css";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedCmId, setSelectedCmId] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const selectedComment = (id) => {
    setSelectedCmId(id);
  };
  return (
    <main>
      <section className="comment-sec">
        {comments ? (
          comments.map((c) => (
            <Comment
              clickHandler={() => selectedComment(c.id)}
              key={c.id}
              name={c.name}
              email={c.email}
            />
          ))
        ) : (
          <p>Loading comments</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedCmId} />
      </section>
      <section>
        <NewComments />
      </section>
    </main>
  );
};

export default Discussion;
