import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostsPage from "./components/PostsPage";
import UsersPage from "./components/UsersPage";
import NotificationsPage from "./components/NotificationsPage";
import PostDetails from "./components/PostDetails";

export default function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>
      <Header />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}
