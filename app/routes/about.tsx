import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
  ];
};

export default function About() {
    return (
      <div className="flex flex-col items-center">
        <div className="w-3/5 text-center">
          <div className="py-10 font-bold text-6xl"><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">About</span></div>
          <p className="font-semibold text-2xl mb-16">Gamelog helps you keep track of all your games from all your platforms. It keeps all your games in one place so you never lose track of them.</p>
          
          <p><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text text-4xl font-semibold">Games List</span></p>
          <p className="font-semibold text-2xl mb-16">View your entire game collection in one list complete with image, title, and genre.</p>

          <p><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text text-4xl font-semibold">Adding a Game</span></p>
          <p className="font-semibold text-2xl mb-16">Add a new game to your list in seconds with a straight forward and short form.</p>

          <p><span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text text-4xl font-semibold">Blog</span></p>
          <p className="font-semibold text-2xl mb-16">Check out our blog page for the latest and greatest news about Gamelog right from the developers!</p>
        </div>
      </div>
    )
}
