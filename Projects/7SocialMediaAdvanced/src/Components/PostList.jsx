import React, { useContext } from 'react';
import { PostListContext } from '../store/PostListStore';
import Post from './Post';
import Msg from './Msg'; 

const PostList = () => {
    const { postList } = useContext(PostListContext);

    return (
        <div className='m-2 flex flex-wrap justify-center'>
            {postList.length === 0 ? (
                <Msg /> 
            ) : (
                postList.map(post => (
                    <Post key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default PostList;
