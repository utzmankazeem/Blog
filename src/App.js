import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Kalab",
      datetime: "July 09 2023, 13:08",
      body: "Hello World, we are here to do a simple check!",
    },
    {
      id: 2,
      title: "Coding",
      datetime: "July 09 2023, 13:08",
      body: "JS React, this is a react base mobile module apps",
    },
    {
      id: 3,
      title: "CSS",
      datetime: "July 09 2023, 13:08",
      body: "Cascading Things, hardcoded and simple coded stuffs",
    },
    {
      id: 4,
      title: "Node",
      datetime: "July 09 2023, 13:08",
      body: "Hackend Programing...Languages that see you!",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  
  useEffect(() => {
    const filterResult = posts.filter(
      post =>
       ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.title).toLocaleLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filterResult.reverse());
  }, [posts, search]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allpost = [...posts, newPost];
    setPosts(allpost);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };
  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };


  return (
    <div className="App">
      <Header title="React Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home posts={searchResult} />}
        />
        <Route
          path="/post"
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
