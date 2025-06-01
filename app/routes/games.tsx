import type { MetaFunction } from "@remix-run/node";
import { PrismaClient } from '@prisma/client'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import GameCard from '~/components/game_card';
import siteLogo from "~/assets/svg/gamelog-logo.svg";
import AddGameCard from "~/components/add_game_card";

export const meta: MetaFunction = () => {
  return [
    { title: "Games" },
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

export default function Games() {
  const { games } = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="py-10 font-bold text-6xl">
        Your <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Games</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {games.map((game) => <GameCard key={game.id} id={game.id} title={game.title} released={game.releaseDate} genre={game.category?.title || "No category"} imgUrl={game.imageUrl || siteLogo} page="1"/>)}
        <AddGameCard/>
      </div>
    </div>
  )
}
