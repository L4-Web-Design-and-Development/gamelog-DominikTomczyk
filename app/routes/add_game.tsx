import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Game" },
  ];
};

export default function AddGame() {
    return <div className="py-40 font-bold text-6xl text-center">Add <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Game</span></div>
}
