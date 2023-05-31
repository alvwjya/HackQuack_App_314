const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const tree_removal = await prisma.service_type.upsert({
    where: { id: 1 },
    update: {},
    create: {
      service_type_name: "Tree removal",
    },
  });

  const roof_cleaning = await prisma.service_type.upsert({
    where: { id: 2 },
    update: {},
    create: {
      service_type_name: "Roof cleaning",
    },
  });

  const fence_installation = await prisma.service_type.upsert({
    where: { id: 3 },
    update: {},
    create: {
      service_type_name: "Fence installation",
    },
  });

  const oven_repairs = await prisma.service_type.upsert({
    where: { id: 4 },
    update: {},
    create: {
      service_type_name: "Oven repairs",
    },
  });

  const plumber = await prisma.service_type.upsert({
    where: { id: 5 },
    update: {},
    create: {
      service_type_name: "Plumber",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
