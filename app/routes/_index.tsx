import { PrismaClient } from '@prisma/client'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import type { MetaFunction } from "@remix-run/node";
import GameCard from '~/components/game_card';
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Log" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient()

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      releaseDate: true,
      imageUrl: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  });

  return json({ games })
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>()

  const topGames = [];

  for (let i = 0; i < 8; i++) {
    topGames[i] = games[i];
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-clip">
      <div className="flex flex-col bg-[url(assets/png/hero-image.png)] bg-no-repeat bg-cover w-full sm:w-[1368px] bg-center justify-between p-5 sm:p-40">
        <p className="text-6xl sm:text-[80px]/[100px] font-bold w-3/5 sm:w-3/6 text-slate-200">Track Your <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Gaming</span> Journey with Ease</p>
        <Link to="/add_game" className="flex bg-transparent rounded-xl border-2 border-cyan-300 text-cyan-300 w-auto sm:w-[630px] h-16 text-[18px] justify-center items-center mt-16">Add Game</Link>
      </div>
      <div className='flex flex-row justify-between w-full sm:w-[1368px] h-[50px] items-center p-5 sm:p-0'>
        <p className="text-slate-200 text-3xl sm:text-2xl font-semibold">Games</p>
        <Link to="/games" className="text-slate-200 sm:text-sm">See all</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {topGames.map((game) => <GameCard key={game.id} id={game.id} title={game.title} released={game.releaseDate} genre={game.category?.title || "No category"} imgUrl={game.imageUrl || siteLogo} page={"0"}/>)}
      </div>
    </div>
  );
}
