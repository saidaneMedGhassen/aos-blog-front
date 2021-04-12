import React, {useState} from 'react'

const CreateComment = ({post, commentPost}) => {
    const [comment, setComment] = useState("");

    return (
        <div>
            <textarea onChange={e => setComment(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            <button className="btn btn-primary mt-2 float-right" onClick={e => commentPost(comment, post.id)}>Publish</button>
        </div>
    )
}

export default CreateComment;
