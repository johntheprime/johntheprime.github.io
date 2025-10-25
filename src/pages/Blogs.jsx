import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Blogs.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [content, setContent] = useState("");

  // 1️⃣ Auto-import all markdown files in src/blogs/
  useEffect(() => {
    // Updated syntax for Vite 4+
    const modules = import.meta.glob("/src/blogs/*.{md,txt}", { query: "?raw", import: "default" });

    const parsedPosts = [];

    for (const path in modules) {
      const file = path.split("/").pop();
      const [yyyy, mm, dd, ...rest] = file.split("-");
      const date = `${yyyy}-${mm}-${dd}`;
      const title = rest.join(" ").replace(/\.(md|txt)$/, "").replace(/-/g, " ");
      parsedPosts.push({
        file,
        date,
        title,
        hash: date,
        load: modules[path], // function returning raw content
      });
    }

    parsedPosts.sort((a, b) => b.date.localeCompare(a.date));
    setPosts(parsedPosts);
  }, []);

  // 2️⃣ Load post based on hash
  useEffect(() => {
    const loadPostFromHash = async () => {
      const hash = window.location.hash.split("#")[2] || "";
      if (!hash) {
        setCurrentPost(null);
        setContent("");
        return;
      }

      const post = posts.find((p) => p.hash === hash);
      if (post) {
        setCurrentPost(post);
        try {
          const text = await post.load();
          setContent(text);
        } catch {
          setContent("⚠️ Failed to load post.");
        }
      } else {
        setCurrentPost(null);
        setContent("");
      }
    };

    loadPostFromHash();
    window.addEventListener("hashchange", loadPostFromHash);
    return () => window.removeEventListener("hashchange", loadPostFromHash);
  }, [posts]);

  return (
    <div className="blog-page">
      <h2>📝 Blogs</h2>

      {!currentPost && (
        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.file}>
              <a href={`#/blogs#${p.hash}`}>
                <strong>{p.date}</strong> — {p.title}
              </a>
            </li>
          ))}
        </ul>
      )}

      {currentPost && (
        <div className="post-content">
          <button className="back-btn" onClick={() => (window.location.hash = "#/blogs")}>
            ← Back
          </button>

          <h3>{currentPost.title}</h3>
          <small>{currentPost.date}</small>

          <article className="markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      )}
    </div>
  );
}
