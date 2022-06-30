import { useState } from "react"

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import { postsMock } from "./utils/local"

import "./global.css"

import "./assets/styles/App.css"

export function App() {
  const [posts, setPosts] = useState(postsMock)
  return (
    <div>
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="posts-container">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  )
}
