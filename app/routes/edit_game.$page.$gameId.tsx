import { useState } from "react";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
import ImageUploader from "~/components/image_uploader";

let sourcePage = "";

export async function loader({ params }: LoaderFunctionArgs) {
  const gameId = params.gameId;
  sourcePage = String(params.page);

  console.log(sourcePage)

  const prisma = new PrismaClient();

  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!game) {
    throw new Response("Game not found", { status: 404 });
  }

  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
    orderBy: { title: "asc" },
  });

  prisma.$disconnect();

  return json({ game, categories });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const gameId = params.gameId;
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const rating = parseFloat(formData.get("rating") as string);
  const releaseDate = new Date(formData.get("releaseDate") as string);
  const imageUrl = formData.get("imageUrl") as string;
  const categoryId = formData.get("categoryId") as string;

  const prisma = new PrismaClient();

  await prisma.game.update({
    where: { id: gameId },
    data: {
      title,
      description,
      price,
      rating,
      releaseDate,
      imageUrl,
      categoryId,
    },
  });

  prisma.$disconnect();

  if (sourcePage === "home") {
    return redirect("/");
  } else {
    return redirect("/games");
  }
}

export default function EditGame() {
  const { game, categories } = useLoaderData<typeof loader>();
  const [imageUrl, setImageUrl] = useState(game.imageUrl || "");

  const handleImageUploaded = (url: string) => {
    setImageUrl(url);
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="pt-20 font-bold text-6xl">
          Edit <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Game</span>
      </div>

      
        <Form method="post" className="space-y-6">
          <input type="hidden" name="imageUrl" value={imageUrl} />

          {/* Form fields with defaultValue set to current game data */}
          <div className="flex flex-col px-20">
            <label htmlFor="title" className="block text-sm font-medium mb-2 text-cyan-300">
            Title
            </label>
            <input
            type="text"
            id="title"
            name="title"
            required
            className="w-80 h-12 p-3 my-1 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />

          <label
              htmlFor="description"
              className="block text-sm font-medium mb-2 text-cyan-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-80 p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            ></textarea>

            <div className="mb-8">
            <ImageUploader onImageUploaded={handleImageUploaded} />
            {imageUrl && (
              <div className="mt-2">
                <p className="block text-sm font-medium mb-2 text-cyan-300">Current image:</p>
                <img
                  src={imageUrl}
                  alt={game.title}
                  className="mt-1 h-20 object-cover rounded-md"
                />
              </div>
            )}
          </div>
            
          <div className="grid grid-cols-2 gap-4 w-80">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium mb-2 text-cyan-300"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                min="0"
                required
                className="w-[152px] p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>  
            <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium mb-2 text-cyan-300"
                >
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  step="0.1"
                  min="0"
                  max="5"
                  required
                  className="w-[152px] p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </div>
            </div>  
            <div>
              <label
                htmlFor="releaseDate"
                className="block text-sm font-medium mb-2 text-cyan-300"
              >
                Release Date
              </label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                required
                className="w-80 p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>  
            <div>
              <label
                htmlFor="categoryId"
                className="block text-sm font-medium mb-2 text-cyan-300"
              >
                Category
              </label>
              <select
                id="categoryId"
                name="categoryId"
                required
                className="w-80 p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="bg-cyan-300 rounded-md border-2 border-cyan-300 text-gray-950 w-80 h-12 font-semibold my-1">
              Update Game
            </button>

            <Link to={sourcePage === "home" ? "/" : "/games"} className="flex bg-gray-950 rounded-md border-2 border-red-300 text-red-300 w-80 h-12 justify-center items-center font-semibold my-1">
              Cancel
            </Link>
          </div>
          
        </Form>
      
    </div>
  );
}