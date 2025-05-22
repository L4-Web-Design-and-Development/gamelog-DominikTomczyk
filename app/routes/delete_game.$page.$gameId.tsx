import { redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

export async function action({ params }: ActionFunctionArgs) {
  const gameId = params.gameId;
  const sourcePage = params.page;

  const prisma = new PrismaClient();

  // Delete the game from the database
  await prisma.game.delete({
    where: { id: gameId },
  });

  prisma.$disconnect();

  // Redirect back to the home page

  if (sourcePage === "home") {
    return redirect("/");
  } else {
    return redirect("/games");
  }
}