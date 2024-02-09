import React, { useContext, useEffect, useState } from 'react';
import { PostListContext } from '../store/PostListStore';
import Post from './Post';
import Msg from './Msg'; 
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
    const { postList , addIntialPosts } = useContext(PostListContext);
    const [fetching , setFetching] = useState(false);

    useEffect(() => {
        console.log("fetch started");
        const controller = new AbortController();
        const signal = controller.signal;
    
        setFetching(true);
        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addIntialPosts(data.posts);
                console.log(data.posts);
                console.log("data returned ");
                setFetching(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setFetching(false);
            });
    
        console.log("fetch ended");
    
        return () => {
            console.log("Clean up useEffect: Stopping data fetching ");
            controller.abort();
        };
    }, []);
    

    return (
        <div className="container">
            {fetching ? <LoadingSpinner/> : (
                <div className="row m-4 p-4">
                    {postList.length === 0 ? (
                        <div className="col">
                            <Msg/>
                        </div>
                    ) : (
                        postList.map(post => (
                            <Post key={post.id} post={post} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default PostList;

    //     console.log("take time onload for data fetching depending useState hook ")
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             addIntialPosts(data.posts);
    //             console.log(data.posts);
    //             console.log("data fetched ")
    //         });
    //     setDataFetched(true)
    // }

    // we ar using useEffect depend on dependencies 

   //condition when we not give any dependencies then multiple requests goes toward the server  
    // useEffect(()=>{
    //     console.log("take time onload for data fetching depending useState hook ")
    //         fetch('https://dummyjson.com/posts')
    //             .then(res => res.json())
    //             .then(data => {
    //                 addIntialPosts(data.posts);
    //                 console.log(data.posts);
    //                 console.log("data fetched ")
    //             });
    // })


// you can add use use effect for side working purpose so it is like async aparrallel work 
