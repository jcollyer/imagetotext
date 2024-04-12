import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const itemData: Prisma.ItemCreateInput[] = [
    {
        id: '1',
        name: 'Luna',
        content: 'This is Luna',
    },
    {
        id: '2',
        name: 'Max',
        content: 'this is Max',
    },
    {
        id: '3',
        name: 'Cooper',
        content: 'this is Cooper',
    },
];

async function main() {
    console.log(`Start seeding ...`);
    for (const i of itemData) {
        // create item if not exists
        const item = await prisma.item.upsert({
            where: { id: i.id },
            create: i,
            update: {},
        });
        console.log(`Upserted item with id: ${item.id}`);
    }
    console.log(`Seeding finished.`);
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