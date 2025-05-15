import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Game" },
  ];
};

export default function AddGame() {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="p-20 font-bold text-6xl">
          Add <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Game</span>
        </div>
        <div className="flex flex-col px-20">
          <button type="button" className="bg-cyan-300 rounded border-2 border-cyan-300 text-gray-950 w-60 h-12 font-semibold my-1">Add Game</button>
          <Link to="/" className="flex bg-gray-950 rounded border-2 border-red-300 text-red-300 w-60 h-12 justify-center items-center font-semibold my-1">Cancel</Link>
        </div>
      </div>
    )
}
