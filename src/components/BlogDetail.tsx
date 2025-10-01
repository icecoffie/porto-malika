import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FiCopy } from "react-icons/fi";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";

interface BlogDetailProps {
  id: string;
}

interface Blog {
  title: string;
  content: string;
  image: string;
  date: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ id }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const ref = doc(db, "blogs", id);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setBlog(snap.data() as Blog);
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <p className="text-gray-400">Loading blog...</p>;
  }

  if (!blog) {
    return <p className="text-gray-400">Blog not found.</p>;
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
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${blog.title} - ${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <article>
      <h2 className="text-lg text-[var(--sec)] mb-2">Blog Detail</h2>
      <h3 className="text-4xl md:text-5xl font-medium mb-4">{blog.title}</h3>
      <span className="text-[var(--sec)] text-sm mb-6 inline-block">{blog.date}</span>

      {/* Optimized responsive image */}
      <div className="overflow-hidden rounded-2xl mb-6">
        <picture>
          <source
            srcSet={`${blog.image}?w=320 320w, ${blog.image}?w=480 480w, ${blog.image}?w=720 720w`}
            sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, 720px"
            type="image/webp"
          />
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[500px] object-cover"
            loading="lazy"
            width={720}
            height={500}
          />
        </picture>
      </div>

      <div className="text-[var(--white-icon)] mb-8" dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* Share buttons */}
      <div className="flex gap-3 flex-wrap">
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
