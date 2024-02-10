import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

// this make the router value in the key value pair 
// by the children we can make layout routing 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* this is router provider for route  */}
    <RouterProvider router={router} />  
  </React.StrictMode>
);
