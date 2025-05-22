import { PrismaClient } from "@prisma/client";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, json, Link, redirect, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import ImageUploader from "~/components/image_uploader";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Game" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
    orderBy: { title: "asc" },
  });

  prisma.$disconnect();

  return json({ categories });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const rating = parseFloat(formData.get("rating") as string);
  const releaseDate = new Date(formData.get("releaseDate") as string);
  const imageUrl = formData.get("imageUrl") as string;
  const categoryId = formData.get("categoryId") as string;

  const prisma = new PrismaClient();

  await prisma.game.create({
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

  return redirect("/");
}

export default function AddGame() {
  const { categories } = useLoaderData<typeof loader>();
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUploaded = (url: string) => {
    setImageUrl(url);
  };

    return (
      <div className="flex flex-col min-h-screen items-center">
        <div className="pt-20 font-bold text-6xl">
          Add a <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Game</span>
        </div>

        <Form method="post" className="space-y-6">
          <input type="hidden" name="imageUrl" value={imageUrl} />

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

          <button type="submit" className="bg-cyan-300 rounded-md border-2 border-cyan-300 text-gray-950 w-80 h-12 font-semibold my-1">Add Game</button>
          <Link to="/" className="flex bg-gray-950 rounded-md border-2 border-red-300 text-red-300 w-80 h-12 justify-center items-center font-semibold my-1">Cancel</Link>
        </div>
        </Form>

      </div>
    )
}
