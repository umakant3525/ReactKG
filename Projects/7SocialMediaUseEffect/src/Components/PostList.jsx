// PostList.jsx
import React, { useContext } from 'react';
import { PostListContext } from '../store/PostListStore';
import Post from './Post';
import Msg from './Msg'; 
import { useEffect } from 'react';

const PostList = () => {
    const { postList , addIntialPosts } = useContext(PostListContext);


    // const [dataFetched ,setDataFetched] = useState(false)

    // if(!dataFetched){
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

// when we give [] empty array as dependencie then server call on page load one call
useEffect(()=>{
    console.log("take time onload for data fetching depending useState hook ")
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addIntialPosts(data.posts);
                console.log(data.posts);
                console.log("data fetched ")
            });
},[])

// you can add use use effect for side working purpose so it is like async aparrallel work 

    return (
        <div className="container">
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
        </div>
    );
};

export default PostList;
