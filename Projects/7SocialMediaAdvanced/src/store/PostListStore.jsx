// PostListStore.js
import React, { createContext, useReducer } from "react";

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
        console.log(`Initial posts added `);
    
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts
            }
        });
    };

    const deletePost = (postId) => {
        console.log(`deletePost ${postId}`);
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost, addIntialPosts }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;
