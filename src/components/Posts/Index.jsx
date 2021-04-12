import React, {useState, useEffect} from 'react'
import Create from './Create'
import Nav from './Nav'
import axios from "axios";
import Post from './Post';

const Index = () => {
    const [posts, setPosts] = useState([]);

    const handlePostCretead = post => {
        const newPosts = [post, ...posts];
        setPosts(newPosts);
    }

    const handlePostDeleted = async (post_id) => {
        try {
            const {data} = await axios.delete('http://localhost:8000/api/post/' + post_id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            
            const newPosts = posts.filter(post => post.id !== post_id);
            setPosts(newPosts);
        } catch (error) {
            
        }
    }

    const handleDeleteComment = async (comment_id, post_id) => {
        try {
            const {data} = await axios.delete('http://localhost:8000/api/comment/' + comment_id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });

            const postIndex = posts.findIndex(p => p.id === post_id);
            let newPosts = [...posts];

            const newComments = newPosts[postIndex].comments.filter(c => c.id !== comment_id);
            newPosts[postIndex].comments = newComments;

            setPosts(newPosts);

        } catch (error) {
                // handle errors
        }
    }

    const handleCommentPost = async (content, post_id) => {
        try {
            const {data} = await axios.post('http://localhost:8000/api/comment', {
               content,
               post_id
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });

            const postIndex = posts.findIndex(p => p.id === post_id);
            let newPosts = [...posts];

            const newComments = [data.data, ...newPosts[postIndex].comments];
            newPosts[postIndex].comments = newComments;

            setPosts(newPosts);
        } catch (error) {
            
        }
    }

    useEffect(async() => {
        const {data} = await axios.get('http://localhost:8000/api/post', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        setPosts(data.data);
    }, [])

    return (
        <>
        <Nav />
        <div className="container">
            <Create postCreated={handlePostCretead} />

            <div className="mt-5">
                {
                    posts.map(post => <Post post={post} postDeleted={handlePostDeleted} deleteComment={handleDeleteComment} commentPost={handleCommentPost} key={post.id} />)
                }
            </div>
        </div>
        </>
    )
}

export default Index
