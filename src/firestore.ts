import { db } from "./firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  onSnapshot as onDocSnapshot,
} from "firebase/firestore";

export const listenBlogs = (cb: (blogs: any[]) => void) => {
  const q = query(collection(db, "blogs"), orderBy("date", "desc"));
  return onSnapshot(q, (snap) => {
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    cb(list);
  });
};

export const listenBlogById = (id: string, cb: (blog: any | null) => void) => {
  const ref = doc(db, "blogs", id);
  return onDocSnapshot(ref, (snap) => {
    if (snap.exists()) cb({ id: snap.id, ...snap.data() });
    else cb(null);
  });
};

export const listenFooterLikes = (cb: (count: number) => void) => {
  const ref = doc(db, "likes", "counter");
  return onDocSnapshot(ref, (snap) => {
    if (snap.exists()) cb((snap.data() as any).likes || 0);
    else cb(0);
  });
};
