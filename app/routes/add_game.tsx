import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Game" },
  ];
};

export default function AddGame() {
    return <div className="py-40 font-bold text-6xl text-center">Add <span className="text-cyan-300">Game</span></div>
}
