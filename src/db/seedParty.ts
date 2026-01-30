import prisma from "../lib/prisma";

export async function seedParties() {
    await prisma.party.createMany({
        data: [
            {
                name: "พรรคสตาร์คฝ่าลมหนาว",
                logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Stark",
                policy: "เน้นการเตรียมพร้อมรับวิกฤต พัฒนาสวัสดิการพื้นฐาน และความซื่อสัตย์ต่อรัฐธรรมนูญ"
            },
            {
                name: "พรรคแลนนิสเตอร์คำรามชัย",
                logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Lannister",
                policy: "เน้นระบบการเงินที่มั่นคง จ่ายหนี้คืนเสมอ และการลงทุนในโครงสร้างพื้นฐานระดับเมกะโปรเจกต์"
            },
            {
                name: "พรรคทาร์แกเรียนสยบโลกันตร์",
                logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Targaryen",
                policy: "เน้นการปฏิรูปการปกครองแบบเด็ดขาด พัฒนาพลังงานสะอาด และการบังคับใช้กฎหมายที่เข้มงวด"
            },
            {
                name: "พรรคไทเรลล์เบ่งบานสุข",
                logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Tyrell",
                policy: "เน้นความมั่งคั่งทางเกษตรกรรม ความมั่นคงทางอาหาร และการใช้ Soft Power พัฒนาเศรษฐกิจ"
            },
            {
                name: "พรรคเกรย์จอยพิชิตสมุทร",
                logoUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Greyjoy",
                policy: "เน้นนโยบายพึ่งพาตนเอง พัฒนาการขนส่งทางน้ำ และกองกำลังป้องกันแนวชายแดนที่เข้มแข็ง"
            },
        ],
        skipDuplicates: true,

    });

}