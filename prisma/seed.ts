import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const games = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description: "An open-world adventure game set in the kingdom of Hyrule.",
      price: 59.99,
      rating: 4.9,
      releaseDate: new Date("2017-03-03"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1748440942/zelda_iiq0r3.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      description:
        "An action RPG set in a fantasy world full of monsters and magic.",
      price: 39.99,
      rating: 4.8,
      releaseDate: new Date("2015-05-19"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1748440895/witcher_aamdol.png",
    },
    {
      title: "Red Dead Redemption 2",
      description: "An open-world western adventure game.",
      price: 59.99,
      rating: 4.7,
      releaseDate: new Date("2018-10-26"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1746700788/capsule_616x353_e36cu3.jpg",
    },
    {
      title: "God of War",
      description: "An action-adventure game based on Norse mythology.",
      price: 49.99,
      rating: 4.9,
      releaseDate: new Date("2018-04-20"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1746700913/images_iztogy.jpg",
    },
    {
      title: "Minecraft",
      description:
        "A sandbox game where players can build and explore their own worlds.",
      price: 26.95,
      rating: 4.8,
      releaseDate: new Date("2011-11-18"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1746701004/minecraft1-6-4-1920x1080-png2-1_u1gbzl.webp",
    },
    {
      title: "Fortnite",
      description:
        "A battle royale game where players fight to be the last one standing.",
      price: 0.0,
      rating: 4.5,
      releaseDate: new Date("2017-07-25"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1746701058/imagem-2024-09-26-103919931_xndpzi.webp",
    },
    {
      title: "Cyberpunk 2077",
      description: "An open-world RPG set in a dystopian future.",
      price: 59.99,
      rating: 4.0,
      releaseDate: new Date("2020-12-10"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1748440911/cyberpunk_p1phm1.jpg",
    },
    {
      title: "Among Us",
      description:
        "A multiplayer game where players work together to complete tasks on a spaceship.",
      price: 4.99,
      rating: 4.4,
      releaseDate: new Date("2018-06-15"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1746701207/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075_kpmojt.jpg",
    },
    {
      title: "Animal Crossing: New Horizons",
      description:
        "A life simulation game where players can build and manage their own island.",
      price: 59.99,
      rating: 4.9,
      releaseDate: new Date("2020-03-20"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1748440918/animal_crossing_owptpo.jpg",
    },
    {
      title: "Hades",
      description:
        "A rogue-like dungeon crawler where players fight their way out of the Underworld.",
      price: 24.99,
      rating: 4.9,
      releaseDate: new Date("2020-09-17"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1748440918/hades_mmqwqx.jpg",
    },
    {
      title: "Horizon: Zero Dawn",
      description:
        "An action RPG on a post apocalyptic earth dominated by robotic animals.",
      price: 49.99,
      rating: 5,
      releaseDate: new Date("2017-03-01"),
      imageUrl: "https://res.cloudinary.com/du5mn8uih/image/upload/v1746702009/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899_uelvvt.jpg",
    },
  ];

  for (const game of games) {
    await prisma.game.create({ data: game });
  }

  console.log("Games created successfully");

  const categories = [
    {
      title: "Action",
      description:
        "Games that require quick reflexes and hand-eye coordination.",
    },
    {
      title: "Adventure",
      description: "Games that involve exploration and puzzle-solving.",
    },
    {
      title: "RPG",
      description: "Games that focus on character development and story.",
    },
    {
      title: "Simulation",
      description: "Games that simulate real-world activities or systems.",
    },
    {
      title: "Strategy",
      description: "Games that require strategic thinking and planning.",
    },
    {
      title: "Puzzle",
      description:
        "Games that challenge players with logic and problem-solving.",
    },
    {
      title: "Sports",
      description: "Games that simulate sports or physical activities.",
    },
    {
      title: "Multiplayer",
      description: "Games that can be played with multiple players.",
    },
    {
      title: "Indie",
      description: "Games developed by independent studios or individuals.",
    },
    {
      title: "Horror",
      description: "Games that aim to scare or unsettle players.",
    },
  ];

  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  console.log("Categories created successfully");

  console.log("Linking each game to a category");

  // Fetch games from the database
  const dbGames = await prisma.game.findMany();

  // Fetch categories from the database
  const dbCategories = await prisma.category.findMany();

  // Link each game to a category
  for (const game of dbGames) {
    const category =
      dbCategories[Math.floor(Math.random() * dbCategories.length)];
    await prisma.game.update({
      where: { id: game.id },
      data: { categoryId: category.id },
    });
  }

  console.log("Games and categories linked successfully");

  const blogPosts = [
    {
      title: "Gamelog's Full Release!",
      body:"We are happy to announce that Gamelog is now fully operational! We hope you will find this site useful for your gaming endeavours. And if you feel like it, go ahead and share your collection with us on our socials. Happy game logging!",
      postedAt: new Date("2025-05-27"),
      author:"Gamelog Team",
    },
  ];

  for (const blogPost of blogPosts) {
    await prisma.blogPost.create({ data: blogPost });
  }

  console.log("Blog Posts created successfully");


  console.log("Seed data created successfully");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
