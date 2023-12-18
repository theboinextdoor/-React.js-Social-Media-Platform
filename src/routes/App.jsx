import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
// import CreatePost from "../component/CreatePost";
// import PostList from "../component/PostList";
import Footer from "../component/Footer";
import PostListProvider from "../store/post-list-store";
import { useState } from "react";
import {Outlet} from "react-router-dom"

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {/* {selectedTab === "Home" ? (<CreatePost />) : (<PostList />)} */}
          {/* It shares the element in router */}
          <Outlet />    
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
