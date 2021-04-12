import moment from 'moment';
import React from 'react';
import CreateComment from './Comments/Comment/CreateComment';
import Comments from './Comments/Comments';

const Post = ({post, postDeleted, deleteComment, commentPost}) => {
    return (
        <div className="card mb-2">
            <div className="card-header">
                [ {moment(post.created_at).fromNow()} ] <span className="font-weight-bold">{post.user.name}</span>
                {(post.user.id === parseInt(localStorage.getItem('user_id')))? <button className="btn btn-danger float-right" onClick={e => postDeleted(post.id)}>X</button> : null}
            </div>
            <div className="card-body">
                <p className="card-text">{post.content}</p>

                <Comments comments={post.comments} deleteComment={deleteComment} commentPost={commentPost} />               
                <CreateComment post={post} commentPost={commentPost} />
            </div>
        </div>
    )
}

export default Post;
