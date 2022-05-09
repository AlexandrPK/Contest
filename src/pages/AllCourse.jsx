import React, { useState} from "react";
import PostList from "../components/PostList"
import PostForm from "../components/PostForm";
import Layout, { Header } from "antd/lib/layout/layout";
import axios from "axios";
import { useEffect } from "react";

const AllCourse = () => {
  const [posts, setPosts] = useState([]);

  //TODO получение постов

  const data = JSON.parse(localStorage.getItem('userData'))

  async function fetchPosts() {
    const response = await axios.get(
      "http://ec2-3-123-32-242.eu-central-1.compute.amazonaws.com:8080/task/allCourses",{headers: { Authorization : data.token,}}
    );
    console.log(response.data)
    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <Layout style={{ background: "#fff" }}>
        <PostForm create={createPost} />
        {posts.length ? (
          <PostList remove={removePost} posts={posts} title="Список курсов" /> 
          // <h1>Загрузка...</h1>
        ) : (
          <div style={{ textAlign: "center" }}>
            {" "}
            <h1>Пока нет подготовленных курсов</h1>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default AllCourse;
