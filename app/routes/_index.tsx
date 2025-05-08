import { PrismaClient } from '@prisma/client'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { MetaFunction } from "@remix-run/node";
import GameCard from '~/components/game_card';

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

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Hello, GameLogger!</h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {games.map((game) => <GameCard key={game.id} title={game.title} released={game.releaseDate} genre={game.category?.title || "No category"} imgUrl={game.imageUrl}/>)}
      </div>
    </div>
  );
}
