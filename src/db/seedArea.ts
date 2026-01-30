import { province } from "../generated/prisma";
import prisma from "../lib/prisma";

export async function seedAreas() {
    // ดึงจังหวัดทั้งหมด
    const provinces = await prisma.province.findMany();

    // Helper Function
    const getProvinceId = (name: string) => {
        const province = provinces.find((p: province) => p.name === name);
        if (!province) throw new Error(`!!! XXX ระบุจังหวัดผิด: ${name} XXX !!!`);
        return province.id;
    };

    // ใส่ข้อมูลอำเภอ 
    await prisma.districtArea.createMany({
        data: [
            // กรุงเทพมหานคร
            { name: "เขตพระนคร", provinceId: getProvinceId("กรุงเทพมหานคร") },
            { name: "เขตบางเขน", provinceId: getProvinceId("กรุงเทพมหานคร") },
            { name: "เขตจตุจักร", provinceId: getProvinceId("กรุงเทพมหานคร") },
            { name: "เขตดอนเมือง", provinceId: getProvinceId("กรุงเทพมหานคร") },
            { name: "เขตบางนา", provinceId: getProvinceId("กรุงเทพมหานคร") },

            // เชียงใหม่
            { name: "อำเภอเมืองเชียงใหม่", provinceId: getProvinceId("เชียงใหม่") },
            { name: "อำเภอแม่ริม", provinceId: getProvinceId("เชียงใหม่") },
            { name: "อำเภอฝาง", provinceId: getProvinceId("เชียงใหม่") },
            { name: "อำเภอหางดง", provinceId: getProvinceId("เชียงใหม่") },
            { name: "อำเภอสันทราย", provinceId: getProvinceId("เชียงใหม่") },

            // ขอนแก่น
            { name: "อำเภอเมืองขอนแก่น", provinceId: getProvinceId("ขอนแก่น") },
            { name: "อำเภอชุมแพ", provinceId: getProvinceId("ขอนแก่น") },
            { name: "อำเภอบ้านไผ่", provinceId: getProvinceId("ขอนแก่น") },
            { name: "อำเภอน้ำพอง", provinceId: getProvinceId("ขอนแก่น") },
            { name: "อำเภอกระนวน", provinceId: getProvinceId("ขอนแก่น") },

            // อุบลราชธานี
            { name: "อำเภอเมืองอุบลราชธานี", provinceId: getProvinceId("อุบลราชธานี") },
            { name: "อำเภอวารินชำราบ", provinceId: getProvinceId("อุบลราชธานี") },
            { name: "อำเภอพิบูลมังสาหาร", provinceId: getProvinceId("อุบลราชธานี") },
            { name: "อำเภอเดชอุดม", provinceId: getProvinceId("อุบลราชธานี") },
            { name: "อำเภอตระการพืชผล", provinceId: getProvinceId("อุบลราชธานี") },

            // ชลบุรี
            { name: "อำเภอเมืองชลบุรี", provinceId: getProvinceId("ชลบุรี") },
            { name: "อำเภอบางละมุง", provinceId: getProvinceId("ชลบุรี") },
            { name: "อำเภอศรีราชา", provinceId: getProvinceId("ชลบุรี") },
            { name: "อำเภอสัตหีบ", provinceId: getProvinceId("ชลบุรี") },
            { name: "อำเภอพานทอง", provinceId: getProvinceId("ชลบุรี") },

            // นครราชสีมา
            { name: "อำเภอเมืองนครราชสีมา", provinceId: getProvinceId("นครราชสีมา") },
            { name: "อำเภอปากช่อง", provinceId: getProvinceId("นครราชสีมา") },
            { name: "อำเภอพิมาย", provinceId: getProvinceId("นครราชสีมา") },
            { name: "อำเภอด่านขุนทด", provinceId: getProvinceId("นครราชสีมา") },
            { name: "อำเภอปักธงชัย", provinceId: getProvinceId("นครราชสีมา") },

            // สงขลา
            { name: "อำเภอเมืองสงขลา", provinceId: getProvinceId("สงขลา") },
            { name: "อำเภอหาดใหญ่", provinceId: getProvinceId("สงขลา") },
            { name: "อำเภอสะเดา", provinceId: getProvinceId("สงขลา") },
            { name: "อำเภอระโนด", provinceId: getProvinceId("สงขลา") },
            { name: "อำเภอรัตภูมิ", provinceId: getProvinceId("สงขลา") },

            // กาญจนบุรี
            { name: "อำเภอเมืองกาญจนบุรี", provinceId: getProvinceId("กาญจนบุรี") },
            { name: "อำเภอไทรโยค", provinceId: getProvinceId("กาญจนบุรี") },
            { name: "อำเภอสังขละบุรี", provinceId: getProvinceId("กาญจนบุรี") },
            { name: "อำเภอทองผาภูมิ", provinceId: getProvinceId("กาญจนบุรี") },
            { name: "อำเภอท่าม่วง", provinceId: getProvinceId("กาญจนบุรี") },

            // สุราษฎร์ธานี
            { name: "อำเภอเมืองสุราษฎร์ธานี", provinceId: getProvinceId("สุราษฎร์ธานี") },
            { name: "อำเภอเกาะสมุย", provinceId: getProvinceId("สุราษฎร์ธานี") },
            { name: "อำเภอเกาะพะงัน", provinceId: getProvinceId("สุราษฎร์ธานี") },
            { name: "อำเภอดอนสัก", provinceId: getProvinceId("สุราษฎร์ธานี") },
            { name: "อำเภอพุนพิน", provinceId: getProvinceId("สุราษฎร์ธานี") },

            // เชียงราย
            { name: "อำเภอเมืองเชียงราย", provinceId: getProvinceId("เชียงราย") },
            { name: "อำเภอแม่สาย", provinceId: getProvinceId("เชียงราย") },
            { name: "อำเภอเชียงของ", provinceId: getProvinceId("เชียงราย") },
            { name: "อำเภอเทิง", provinceId: getProvinceId("เชียงราย") },
            { name: "อำเภอแม่จัน", provinceId: getProvinceId("เชียงราย") },
        ],
        skipDuplicates: true,
    });
}