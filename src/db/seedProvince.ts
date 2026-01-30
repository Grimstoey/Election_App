import prisma from "../lib/prisma";

export async function seedProvinces() {
    await prisma.province.createMany({
        data: [
            { name: "กรุงเทพมหานคร" },
            { name: "เชียงใหม่" },
            { name: "ขอนแก่น" },
            { name: "อุบลราชธานี" },
            { name: "ชลบุรี" },
            { name: "กาญจนบุรี" },
            { name: "นครราชสีมา" },
            { name: "สงขลา" },
            { name: "สุราษฎร์ธานี" },
            { name: "เชียงราย" },
        ],
        skipDuplicates: true,
    });
}

