import { districtArea } from "../generated/prisma";
import prisma from "../lib/prisma";
import { Prisma } from "../generated/prisma";

export async function seedDistricts() {
    //ดึงจังหวัดทั้งหมดพร้อมอำเภอข้างใน
    const provinces = await prisma.province.findMany({
        include: { areas: true }
    });

    //เอาไว้เก็บเขตเลือกตั้งที่สร้างด้านล่าง
    const districtsToCreate: Prisma.electionDistrictCreateManyInput[] = [];

    //วนลูปรายจังหวัด
    for (const province of provinces) {
        // ในแต่ละจังหวัด ให้นำอำเภอมาวนลูปเพื่อใส่เลขเขต 1, 2, 3...
        province.areas.forEach((area: districtArea, index: number) => {
            districtsToCreate.push({
                number: index + 1,    // เลขเขตเริ่มที่ 1 ใหม่เสมอในแต่ละจังหวัด
                areaId: area.id, //id อำเภอ
                isClosed: false,
            });
        });
    }

    //บันทึกลง Database
    const result = await prisma.electionDistrict.createMany({
        data: districtsToCreate,
        skipDuplicates: true,
    });

}


/*
    Note: Prisma.electionDistrictCreateManyInput 
    คือ Type ที่ Prisma เจนมาให้โดยอัตโนมัติ 
    ซึ่งจะบังคับว่าใน Object ต้องมี number และ areaId 
    ตามที่ Schema กำหนดไว้
*/