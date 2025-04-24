import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Game" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function AddGame() {
    return <div className="container px-20 py-20 font-bold text-6xl text-center">Add <span className="text-cyan-500">Game</span></div>
}
