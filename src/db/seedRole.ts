import prisma from "../lib/prisma";

export async function seedRoles() {
    await prisma.role.createMany({
        data: [
            { name: "VOTER" },
            { name: "EC" },
            { name: "ADMIN" },
        ],
        skipDuplicates: true,
    });
}
