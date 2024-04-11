import { PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient();

console.log('Seeding ...', prisma);

const itemData: Prisma.ItemCreateInput[] = [
    {
        name: 'Item 1',
        content: "this is item 1",
    },
    {
        name: 'Item 2',
        content: "this is item 2",
    },
    {
        name: 'Item 3',
        content: "this is item 3",
    },
];

async function main() {
    console.log('Start seeding ...');
    for(const i of itemData) {
        const item = await prisma.item.upsert({
            where: { id: i.id},
            create: i,
            update: {},
        });
        console.log(`Upserted item with id: ${item.id}`);
    }
    console.log('Seeding finished.');
}

main()
   .then(async () => {
    await prisma.$disconnect();
   })
   .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});