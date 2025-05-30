import { PrismaClient } from "@prisma/client";
import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogPost from "~/components/blog_post";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient()

  const blogPosts = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      postedAt: true,
      author: true,
    },
  });

  return json({ blogPosts })
}

export default function Blog() {
    const { blogPosts } = useLoaderData<typeof loader>()

    return (
    <div className="flex flex-col">
        <div className="py-10 font-bold text-6xl text-center"><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Blog</span></div>
        <div className="flex flex-col items-center">
          {blogPosts.map((post) => <BlogPost key={post.id} title={post.title} body={post.body} posted={post.postedAt} author={post.author}/>)}
        </div>
      </div>
    )
}
