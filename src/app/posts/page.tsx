import PostList from "@/components/posts-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading....">
        <PostList />
      </Suspense>
    </main>
  );
}
// now title appeears right away while posts list loading
// we don't nees a loading page anymore
