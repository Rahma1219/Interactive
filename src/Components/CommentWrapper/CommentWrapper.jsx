import './CommentWrapper.css'
import Comment from '../Comment/Comment'


function CommentWrapper(props) {
 

  return (
    <div className='commentwrapper'>
      {props.AllComments.map((comment) => {
        return (

          <Comment
          cancelDelete={props.cancelDelete}
          key={comment.commentid}
          comment={comment}
          deleteComment={props.deleteComment}
          postid={props.postid}
          updateComment={props.updateComment}
          likes={props.likes}
          createdAt={props.createdAt}
          // uniqueid={props.id}
        
          >

          </Comment>
        );
      })}
    </div>
  )


}
export default CommentWrapper