import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export async function generateMetadata(data: any) {
  console.log(data);
  const post = await getPosts();
  const numberOfPosts = post.length;
  return {
    title: `Dynamic metadata: ${numberOfPosts}`,
    description: "This is a description",
  } as import("next").Metadata;
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
