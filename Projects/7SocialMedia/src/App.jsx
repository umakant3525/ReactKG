import React, { useState } from 'react';
import "./App.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import  PostListProvider  from './store/PostListStore';

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <PostListProvider>
      <div className='app-container'> 
        <Sidebar selectedTab={selectedTab} onTabChange={handleTabChange} />
        <div className='content'>
          <Header/>
          {
            selectedTab === "Home" && <PostList/>
          }
          {
            selectedTab === "CreatePost" && <CreatePost/>
          }
          <Footer/>
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
