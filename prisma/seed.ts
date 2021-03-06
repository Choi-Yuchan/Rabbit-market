import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  [...Array.from(Array(500).keys())].forEach(async (item) => {
    await client.stream.create({
      data: {
        name: String(item),
        description: String(item),
        price: item,
        user: {
          connect: {
            id: 11,
          },
        },
      },
    });
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
