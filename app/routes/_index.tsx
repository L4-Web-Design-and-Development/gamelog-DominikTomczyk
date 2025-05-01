import { PrismaClient } from '@prisma/client'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { MetaFunction } from "@remix-run/node";
import GameCard from '~/components/game_card';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient()

  const games = await prisma.game.findMany()

  return json({ games })
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>()

  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold">Hello, GameLogger!</h1>
        {games.map((game) => (
          <div key={game.id}>
            <GameCard title={game.title} added={game.createdAt}/>
          </div>
        ))}
      </div>
    </div>
  );
}
