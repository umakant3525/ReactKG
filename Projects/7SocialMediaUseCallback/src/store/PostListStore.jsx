// PostListStore.js
import React, { createContext, useCallback, useReducer } from "react";
import { useMemo } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    addIntialPosts: () => {},
    deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
    let newPostList = [...currentPostList]; // Copy the current post list to avoid mutating state directly
    switch (action.type) {
        case "DELETE_POST":
            // Filter out the post with the matching postId
            newPostList = newPostList.filter(post => post.id !== action.payload.postId);
            return newPostList;
        case "ADD_POST":
            // Add the new post to the list
            newPostList.push(action.payload);
            return newPostList;
        case "ADD_INITIAL_POSTS":
            // Add the new post to the list
            newPostList = action.payload.posts;
            return newPostList;
        default:
            return currentPostList;
    }
};

const PostListProvider = ({ children }) => {
  
    // here we can add manually a data for the posts with our own api 
    const defaultPostList = [];
    const [postList, dispatchPostList] = useReducer(postListReducer, defaultPostList);

    const addPost = (title, body, reactions, userId, tags) => {
        console.log(`Post added: 
            Post ID: ${userId}
            Title: ${title}
            Body: ${body}
            Reactions: ${reactions}
            User ID: ${userId}
            Tags: ${tags.join(", ")}
        `);
    
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: userId,
                title: title,
                body: body,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        });
    };

    const addIntialPosts = (posts) => {
        console.log(`Initial post are added depend on server time `);
    
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts
            }
        });
    };

  


    const deletePostFunction = (postId) => {
        console.log(`deletePost ${postId}`);
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };
    
      // usecall back is used for memomization of state here we do not want to render children depend on parent so we use callBack
      // by this we optimize repaint cycles of chilgren 

    // Now you can use deletePostFunction in your callback
    const deletePost = useCallback(deletePostFunction, [dispatchPostList]);
    

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost, addIntialPosts }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;

//When the thing about only data and value then useMemo is used 

//example these are optimization techniques unnecessary calculations 

// //suppose this is as prop or contextdata
// const arr = [323,34543,432,43,54,876,23,54,9];

// const sortArr = useMemo(arr.sort())
// console.log(sortArr)
// const sliceArr = useMemo(arr.slice())
// console.log(sliceArr)