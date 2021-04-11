import axios from 'axios';
import React, {useState} from 'react'

const Create = ({postCreated}) => {
    const [post, setPost] = useState("");

    const createPost = async () => {
        try {
            const {data} = await axios.post('http://localhost:8000/api/post',{
                    content: post
                }, {           
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
            });
            
            postCreated(data.data)
        } catch (error) {
            
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                Hi {localStorage.getItem('name')}, whats new?
            </div>
            <div className="card-body">
                <textarea onChange={e => setPost(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn btn-primary mt-2 float-right" onClick={createPost}>Publish</button>
            </div>
        </div>
    )
}

export default Create
