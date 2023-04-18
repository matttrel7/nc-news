const CommentCard = ({ comments }) => {
  if (comments.length === 0) return <h3>No Comments</h3>;
  return (
    <ul className="comment-card">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>
              <span className="comment-category-titles">Comment:</span>{" "}
              {comment.body}
            </p>
            <p>
              <span className="comment-category-titles">Author:</span>{" "}
              {comment.author}
            </p>
            <p>
              <span className="comment-category-titles">Votes:</span>{" "}
              {comment.votes}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentCard;
