import UpvoteBtn from "@/components/upvote-btn";

export default async function Page({ params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <UpvoteBtn />
    </main>
  );
}

/* every component iserver component by default, it is async and also fetching data
 in server we can not use client so we created a client side component for 
 interactivity */
