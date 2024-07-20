import PostList from "@/components/posts-list";
import React, { Suspense } from "react";

export default function page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 title">All posts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
}
