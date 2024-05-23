import { PrismaClient } from "@prisma/client";

const prismaClientSiengleton = () => {
    return new PrismaClient();
}

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSiengleton();

export default prisma;

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
