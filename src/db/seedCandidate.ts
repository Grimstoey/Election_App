import { party } from "../generated/prisma";
import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export async function seedCandidates() {
    const parties = await prisma.party.findMany();

    const districts = await prisma.electionDistrict.findMany();

    if (parties.length === 0 || districts.length === 0) {
        console.warn("!!! XXX ไม่พบข้อมูลพรรคหรือเขตเลือกตั้ง XXX !!!");
        return;
    }


    const maleNames = [
        "จักรพรรดิราช", "มหาธีรราช", "ศรีสุริยวรมัน", "วชิรเดชาธิราช",
        "ภาณุเทพราช", "มหาราชันย์", "สุริยจักร", "เทวาธิราช",
        "รัตนจักร", "ศุภวรมัน", "จันทรวรมัน", "จักรเดช",
        "ราชภาณุ", "วรจักร", "อัครราช", "มหาวชิร",
        "เทวราชันย์", "ภัทราธิราช", "สุริยราช", "จักรภพ"
    ];

    const femaleNames = [
        "ศรีจันทราเทวี", "สุริยวดี", "รัตนเทวี", "จันทรมาศ",
        "ภาณุมาศเทวี", "สิริวดี", "วรศิริ", "กัลยาณีเทวี",
        "สุภเทวี", "จิราวดี", "อัมพิกาเทวี", "รัตนาวดี",
        "วรจันทรา", "สุริยาศรี", "กาญจนเทวี", "ศศิประภาเทวี",
        "ภัทรมาศ", "จันทร์ศิริ", "สิริกาญจน์", "วรรณราชเทวี"
    ];

    const lastNames = [
        "หลาบละเด้อ", "พอแล้ว", "ฮักไปช้ำไป", "หัวใจเซเว",
        "มาหลอกให้ฮัก", "โดนเท", "หัวใจสิเพ",
        "เฮ็ดจั่งใด๋", "บ่เคยสมหวัง", "บอกให้พอ",
        "ใจมันสิพัง", "บ่มีไผฮัก", "บ่เป็นหยัง", "จบเจือ",
        "เนี่ยะนะ", "อยากรวยจ้า", "นั่งแก้งาน", "เป็นจีนเทา",
        "รักแมว", "พักเถอะ", "ไม่อ่านแชทกลุ่ม", "นอนดูซีรีย์",
        "ก็สดใสอยู่ดีดี", "นอนไม่พอ", "อีกแล้วหรอ", "น้ำตาลตก",
        "ติดแกลม", "มันจะไอนั่น", "ทำถึง", "ใครเตือนไม่ฟังฟังหมอดู",
        "สายมู", "รับทราบไม่รับทำ", "ขยันถูกที่ก็ไม่รวยอยู่ดี", "งานหนักไม่เคยฆ่าคน",
        "แก้ขนาดนี้ทำใหม่เถอะ", "สั่งวันนี้จะเอาเมื่อวาน", "ท้อละนะ",
        "หน้างออย่างป้าก", "เป็นกำกึ๊ด", "จะไปไปไป", "จะไปไปมา",
        "ห้าคูณแปดใส่ข้าว", "ไปฟ้อนผีมดผีเม็ง", "หกคูณเก้าใส่แกง", "ขนคิงลุก",
        "ไม่กินลาบดิบ"

    ];

    const candidatesToCreate: Prisma.candidateCreateManyInput[] = [];

    for (const district of districts) {
        parties.forEach((party: party, index: number) => {
            const isFemale = Math.random() < 0.5;
            const firstName = isFemale
                ? femaleNames[Math.floor(Math.random() * femaleNames.length)]
                : maleNames[Math.floor(Math.random() * maleNames.length)];

            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

            candidatesToCreate.push({
                fullName: `${firstName} ${lastName}`,
                number: index + 1,
                imageUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${firstName}`,
                partyId: party.id,
                districtId: district.id,
            });
        });
    }

    const result = await prisma.candidate.createMany({
        data: candidatesToCreate,
        skipDuplicates: true,
    });

    console.log(`--->>> มี Candidates ทั้งหมด ${result.count} คน`);
}
