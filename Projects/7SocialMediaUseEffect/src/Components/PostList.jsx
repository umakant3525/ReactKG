// PostList.jsx
import React, { useContext } from 'react';
import { PostListContext } from '../store/PostListStore';
import Post from './Post';
import Msg from './Msg'; 

const PostList = () => {
    const { postList , addIntialPosts } = useContext(PostListContext);

    const handleGetPostsClick = () => {
        console.log("get posts clicks ")
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addIntialPosts(data.posts);
                console.log(data.posts);
            });
    };

    return (
        <div className="container">
            <div className="row m-4 p-4">
                {postList.length === 0 ? (
                    <div className="col">
                        <Msg onGetPostsClick={handleGetPostsClick} />
                    </div>
                ) : (
                    postList.map(post => (
                        <Post key={post.id} post={post} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PostList;
