import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Games" },
  ];
};

export default function Games() {
    return <div className="py-40 font-bold text-6xl text-center">Your <span className="text-cyan-500">Games</span></div>
}
