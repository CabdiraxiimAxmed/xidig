import Button from './Button';
const Comment = ({ serverComment }) => {
  return serverComment.map(comment => (
    <>
      <div key={comment._id} className="comment">
        <p>{comment.comment}</p>
        <Button text={`@${comment.username}`} stylingClass="user-btn" />
      </div>
    </>
  ));
};

export default Comment;
