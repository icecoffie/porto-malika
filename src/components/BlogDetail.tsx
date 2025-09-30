import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { FiCopy } from "react-icons/fi";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";

interface BlogDetailProps {
  id: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ id }) => {
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const ref = doc(db, "blogs", id);
    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setBlog(snap.data());
      } else {
        setBlog(null);
      }
    });

    return () => unsubscribe();
  }, [id]);

  if (!blog) {
    return <p className="text-gray-400">Loading blog...</p>;
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(blog.title);
    const url = encodeURIComponent(currentUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${blog.title} - ${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <article>
      <h2 className="text-lg text-[var(--sec)] mb-2">Blog Detail</h2>
      <h3 className="text-4xl md:text-5xl font-medium mb-4">{blog.title}</h3>
      <span className="text-[var(--sec)] text-sm mb-6 inline-block">
        {blog.date}
      </span>

      <div className="overflow-hidden rounded-2xl mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      <div
        className="text-[var(--white-icon)] mb-8"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>

      {/* Share buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          <FiCopy /> Copy Link
        </button>
        <button
          onClick={handleShareTwitter}
          className="flex items-center gap-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <FaTwitter /> Twitter
        </button>
        <button
          onClick={handleShareWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
        >
          <FaWhatsapp /> WhatsApp
        </button>
      </div>
    </article>
  );
};

export default BlogDetail;
