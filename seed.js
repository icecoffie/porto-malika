import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

// Ambil service account
const serviceAccount = JSON.parse(readFileSync("serviceAccountKey.json", "utf-8"));

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function seed() {
  console.log("⏳ Mulai masukin dummy data...");

  // 6 dummy blogs
  const blogs = [
    {
      title: "Frontend Magic with Astro",
      excerpt: "Exploring Astro frontend workflow.",
      content: "<p>Astro makes building modern frontend a breeze...</p>",
      image: "/blog1.webp",
      date: "2025-09-01",
    },
    {
      title: "Tailwind CSS Tips",
      excerpt: "Advanced techniques with Tailwind.",
      content: "<p>Advanced Tailwind techniques: gradients, typography, animations.</p>",
      image: "/blog2.webp",
      date: "2025-08-25",
    },
    {
      title: "Building Parallax Effects",
      excerpt: "Step-by-step parallax guide.",
      content: "<p>Parallax scrolling with vanilla JS + Tailwind.</p>",
      image: "/blog3.webp",
      date: "2025-08-10",
    },
    {
      title: "SEO for Portfolio Sites",
      excerpt: "Boost your portfolio SEO.",
      content: "<p>Boost SEO: meta tags, OG, structured data.</p>",
      image: "/blog4.webp",
      date: "2025-07-30",
    },
    {
      title: "React & Astro Together",
      excerpt: "Combine React & Astro.",
      content: "<p>Combine React & Astro for interactive sites.</p>",
      image: "/blog5.webp",
      date: "2025-07-15",
    },
    {
      title: "Creating Dynamic Animations",
      excerpt: "Animate UI with Tailwind.",
      content: "<p>Tailwind keyframes, hover effects, scroll triggers.</p>",
      image: "/blog6.webp",
      date: "2025-07-01",
    },
  ];

  for (let i = 0; i < blogs.length; i++) {
    await db.collection("blogs").doc(String(i + 1)).set(blogs[i]);
  }
  console.log("✅ 6 blog dummy masuk Firestore");

  // likes
  await db.collection("likes").doc("counter").set({ likes: 6000 });
  console.log("✅ Likes di-set ke 6000");

  console.log("🎉 Semua dummy data sukses masuk!");
}

seed();
