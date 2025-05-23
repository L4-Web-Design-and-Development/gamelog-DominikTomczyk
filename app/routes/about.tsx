import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
  ];
};

export default function About() {
    return <div className="py-40 font-bold text-6xl text-center">About</div>
}
