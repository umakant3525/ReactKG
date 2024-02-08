// PostListStore.js
import React, { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
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
        default:
            return currentPostList;
    }
};

const PostListProvider = ({ children }) => {
    const defaultPostList = [
        {
            id: "1",
            title: "Title 1",
            body: "Going to Mumbai I am going to mumbaifor my hope mbjbd g xchjhvjbxvh",
            reactions: 1,
            userId: "usr-1",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            id: "2",
            title: "Title 2",
            body: "Going to Mumbai I am going to mumbaifor my hope mbjbd g xchjhvjbxvh",
            reactions: 2,
            userId: "usr-2",
            tags: ["tag1", "tag2", "tag3", "tag4"]
        }
    ];

    const [postList, dispatchPostList] = useReducer(postListReducer, defaultPostList);

    const addPost = ( title, body, reactions, userId, tags) => {
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
                id:  userId,
                title: title,
                body: body,
                reactions: reactions,
                userId: userId,
                tags: tags
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
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;
