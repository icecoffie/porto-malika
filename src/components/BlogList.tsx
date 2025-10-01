import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setBlogs(blogsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="text-gray-400">Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p className="text-gray-400">No blogs available.</p>;
  }

  return (
    <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 cursor-grab">
      {blogs.map((blog) => (
        <a
          key={blog.id}
          href={`/detail-blog/${blog.id}`}
          className="min-w-[280px] md:min-w-[320px] flex-shrink-0 bg-[#1414149c] rounded-2xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 snap-start relative backdrop-blur-lg"
        >
          <div className="overflow-hidden rounded-xl h-48 mb-4">
            <picture>
              {/* Responsive images */}
              <source
                srcSet={`${blog.image}?w=320 320w, ${blog.image}?w=480 480w, ${blog.image}?w=720 720w`}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 502px"
                type="image/webp"
              />
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={502}
                height={340}
              />
            </picture>
          </div>
          <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
          <p className="text-[var(--white-icon)] text-sm mb-2">{blog.excerpt}</p>
          <span className="text-[var(--sec)] text-xs">{blog.date}</span>
        </a>
      ))}
    </div>
  );
};

export default BlogList;
