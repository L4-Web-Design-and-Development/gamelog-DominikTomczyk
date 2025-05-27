import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
  ];
};

export default function About() {
    return (
      <div className="flex flex-col items-center">
        <div className="py-10 font-bold text-6xl"><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">About</span></div>
        <p className="font-semibold text-2xl w-3/5 text-center">Gamelog helps you keep track of all your games from all your platforms. It keeps all your games in one place so you never lose track of them.</p>
        <p><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Blog</span></p>
        <p>Check out our blog page for the latest and greatest news about Gamelog!</p>
      </div>
    )
}
