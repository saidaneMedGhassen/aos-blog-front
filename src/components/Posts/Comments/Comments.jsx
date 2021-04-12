import React from 'react';
import Comment from './Comment/Comment';

const Comments = ({comments, deleteComment}) => {
    const commentsToDisplay = (comments.length > 0)? (<div className="row px-5" style={{display: 'flex', flexDirection: 'column'}}>
            <h5>Comments</h5>
            <div>
                {
                    comments.map(comment => <Comment comment={comment} deleteComment={deleteComment} key={comment.id} />)
                }
            </div>
        </div>) : null;

    return commentsToDisplay;
}

export default Comments
