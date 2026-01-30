import prisma from "../src/lib/prisma";
import {
    seedRoles,
    seedProvinces,
    seedAreas,
    seedDistricts,
    seedParties,
    seedCandidates,
} from "../src/db";

async function main() {
    console.log("🚀 Starting database maintenance...");

    console.log("🧹 Cleaning old data...");
    try {
        // ลบข้อมูลที่ปลายทางของความสัมพันธ์ก่อน
        await prisma.vote.deleteMany({});
        await prisma.candidate.deleteMany({});
        await prisma.userRole.deleteMany({});
        await prisma.user.deleteMany({});

        // ลบข้อมูลที่เป็นพื้นฐานตามลำดับ
        await prisma.party.deleteMany({});
        await prisma.electionDistrict.deleteMany({});
        await prisma.districtArea.deleteMany({});
        await prisma.province.deleteMany({});
        await prisma.role.deleteMany({});

        console.log("✅ Database cleaned.");
    } catch (error) {
        console.error("❌ Error cleaning database:", error);
        throw error;
    }


    console.log("🌱 Seeding new data...");
    try {
        await seedRoles();
        console.log("   - Roles seeded");

        await seedProvinces();
        console.log("   - Provinces seeded");

        await seedAreas();
        console.log("   - Areas seeded");

        await seedDistricts();
        console.log("   - Election Districts seeded");

        await seedParties();
        console.log("   - Parties seeded");

        await seedCandidates();
        console.log("   - Candidates seeded");

    } catch (error) {
        console.error("❌ Error during seeding:", error);
        throw error;
    }
}

main()
    .then(() => {
        console.log("✨ Seeding process completed successfully!");
    })
    .catch((e) => {
        console.error("❌ Seed failed with error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });