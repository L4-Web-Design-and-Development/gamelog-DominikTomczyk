import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
  ];
};

export default function Blog() {
    return <div className="py-40 font-bold text-6xl text-center text-cyan-500">Blog</div>
}
