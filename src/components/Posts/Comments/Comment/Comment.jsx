import moment from 'moment';
import React from 'react'

const Comment = ({comment, deleteComment}) => {
    return (
        <div className="p-2 mb-1" style={{backgroundColor: '#dff9fb'}}>
            <p><b>{comment.user.name}: </b>{comment.content}</p>
            <p>{moment(comment.created_at).fromNow()} {(parseInt(localStorage.getItem('user_id')) === comment.user_id)? <span className="text-primary" style={{cursor: 'pointer'}} onClick={e => deleteComment(comment.id, comment.post_id)}>- Delete</span> : null}</p>
        </div>
    )
}

export default Comment;
